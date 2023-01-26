const express = require('express');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const http = require('http');
const { Server } = require("socket.io");
const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200
}

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});

app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {
    console.log("uso");
    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        admin: req.body.admin,
        moderator: req.body.moderator,
       // lastLogged: req.body.lastLogged
    };

    User.create(obj).then( rows => {
        
        const usr = {
          //  userId: rows.id,
            name: rows.name,
            email:rows.email,
            password:rows.password,

            admin: rows.admin,
            moderator: rows.moderator
        };
     
        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

        
        
        res.json({ token: token });

    }).catch( err =>{ res.status(500).json(err) });
});
function authSocket(msg, next) {
    if (msg[1].token == null) {
        next(new Error("Not authenticated"));
    } else {
        jwt.verify(msg[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                next(new Error(err));
            } else {
                msg[1].user = user;
                next();
            }
        });
    }
}
io.on('connection', socket => {
    socket.use(authSocket);
 
    socket.on('comment', msg => {
        Messages.create({ body: msg.body, id: msg.id, userId: msg.user.id })
            .then( rows => {
                Messages.findOne({ where: { id: rows.id }, include: ['user'] })
                    .then( msg => io.emit('comment', JSON.stringify(msg)) ) 
            }).catch( err => res.status(500).json(err) );
    });

    socket.on('error', err => socket.emit('error', err.message) );
});
app.post('/login', (req, res) => {
    console.log("jej");
    console.log(req.body);
    User.findOne({ where: { name: req.body.username } })
        .then( usr => {
             //   console.log(bcrypt);
             console.log(usr.password);
             console.log(req.body.password)
            if (bcrypt.compareSync(req.body.password, usr.password)) {
                const obj = {
                 //
                
                 userId: usr.id,
                    user: usr.name,
                    admin: usr.admin,
                    moderator: usr.moderator
                };
              
                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                
                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err => res.status(400).json({msg:"Invalid credentials"}) );
});

server.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
});