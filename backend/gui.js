const express = require('express');
const { sequelize, Users,Movies,Genre,Cinema,Reservation,Cast } = require('./models');
const usersRoutes = require('./routes/usersRoutes');
//const adminRoutes = require('./routes/admin');
//const routes = require('./routes/admin');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const staticMdl=express.static(path.static(path.join(__dirname,'dist')));
const app = express();
app.use(staticMdl);
app.use(express.static(path.join(__dirname, 'static')));

app.use(staticMdl);

app.use(express.static(path.join(__dirname,'static')));
function getCookies(req) {
    if (req.headers.cookie == null) return {};      

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/login');
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
    
        req.user = user;
    
        next();
    });
}


app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});

app.get('/login', (req, res) => {
    ///main();
    res.sendFile('login.html', { root: './static' });
});

app.get('/admin', (req, res) => {

    res.sendFile('admin.html', { root: './static' });
});


app.get('/admin/users', (req, res) => {
    res.sendFile('adminUsers.html', { root: './static' });
});

app.get('/admin/users', (req, res) => {
    res.sendFile('adminUsers.html', { root: './static' });
});


app.get('/admin/users/updateUser/:id', (req, res) => {
    res.sendFile('updateUser.html', { root: './static/users' });
});

app.get('/admin/cast', (req, res) => {
    res.sendFile('cast.html', { root: './static/cast' });
});
app.get('/admin/cast/updateCast/:id', (req, res) => {
    res.sendFile('updateCast.html', { root: './static/cast' });
});

app.get('/admin/broadcast', (req, res) => {
    res.sendFile('broadcast.html', { root: './static/broadcast' });
});
app.get('/admin/broadcast/updateBroadcast/:id', (req, res) => {
    res.sendFile('updateBroadcast.html', { root: './static/broadcast' });
});
app.get('/admin/reservation', (req, res) => {
    res.sendFile('reservation.html', { root: './static/reservation' });
});
app.get('/admin/reservation/updateReservation/:id', (req, res) => {
    res.sendFile('updateReservation.html', { root: './static/reservation' });
});

app.get('/admin/movies', (req, res) => {
    res.sendFile('movies.html', { root: './static/movies' });
});
app.get('/admin/movies/updateMovies/:id', (req, res) => {
    res.sendFile('updateMovies.html', { root: './static/movies' });
});
app.get('/admin/genre', (req, res) => {
    res.sendFile('genre.html', { root: './static/genre' });
});
app.get('/admin/genre/updateGenre/:id', (req, res) => {
    res.sendFile('updateGenre.html', { root: './static/genre' });
});

app.get('/admin/dimension', (req, res) => {
    res.sendFile('dimension.html', { root: './static/dimension' });
});
app.get('/admin/dimension/updateDimension/:id', (req, res) => {
    res.sendFile('updateDimension.html', { root: './static/dimension' });
});
app.get('/admin/actor', (req, res) => {
    res.sendFile('actor.html', { root: './static/actor' });
});
app.get('/admin/actor/updateActor/:id', (req, res) => {
    res.sendFile('updateActor.html', { root: './static/actor' });
});
app.get('/admin/director', (req, res) => {
    res.sendFile('director.html', { root: './static/director' });
});
app.get('/admin/director/updateDirector/:id', (req, res) => {
    res.sendFile('updateDirector.html', { root: './static/director' });
});
app.get('/admin/cinema', (req, res) => {
    res.sendFile('cinema.html', { root: './static/cinema' });
});
app.get('/admin/cinema/updateCinema/:id', (req, res) => {
    res.sendFile('updateCinema.html', { root: './static/cinema' });
});
app.get('/admin/directing', (req, res) => {
    res.sendFile('directing.html', { root: './static/directing' });
});
app.get('/admin/directing/updateDirecting/:id', (req, res) => {
    res.sendFile('updateDirecting.html', { root: './static/directing' });
});
app.get('/admin/seat', (req, res) => {
    res.sendFile('seat.html', { root: './static/seat' });
});
app.get('/admin/seat/updateSeat/:id', (req, res) => {
    res.sendFile('updateSeat.html', { root: './static/seat' });
});


app.get('/updateUser/:id', (req, res) => {
    res.sendFile('updateUser.html', { root: './static/users' });
});

app.listen({ port: 8000 }, async () => {
    await sequelize.authenticate();
});