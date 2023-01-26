const { sequelize, User} = require('../models');
const { userSchema } = require('../routes/validation/userSchema');

const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
        User.findAll()
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/:name', (req, res) => {

    User.findOne({ where: { name: req.params.name } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    console.log(token);
    if(payload.admin === false)
        res.status(403).json({ msg: "Do not have admin priveledges!"});
    else{
    try{
        const dataValid = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }
        await userSchema.validateAsync(dataValid, { abortEarly: false });
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        
        User.create({ name: req.body.name, email: req.body.email, password: hashPassword, admin: req.body.admin, moderator: req.body.moderator, lastLogged: req.body.lastLogged,
            firstName: req.body.firstName,lastName: req.body.lastName, })
            .then( rows => res.json(rows) )
            .catch( err => res.status(500).json(err) );
    }
    catch(err){
        console.log(err);
        let fullMsg = "";
        err.details.forEach(element => {
            fullMsg = fullMsg + element.message + "\n";
        });
        const data = {
            msg: fullMsg,
        }
        console.log(fullMsg);
        return res.status(400).json(data);
    }
}
});

route.put('/:id', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    console.log(token);
    if(payload.admin === false)
        res.status(403).json({ msg: "Do not have admin priveledges!"});
    else{
        try{
            
            const dataValid = {
                name: req.body.name,
            }
            await userSchema.validateAsync(dataValid, { abortEarly: false });
        
            User.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.name = req.body.name;
                usr.admin = req.body.admin;
                usr.moderator = req.body.moderator;
                usr.save()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
        catch(err){
            console.log(err);
            let fullMsg = "";
            err.details.forEach(element => {
                fullMsg = fullMsg + element.message + "\n";
            });
            const data = {
                msg: fullMsg,
            }
            console.log(fullMsg);
            return res.status(400).json(data);
        }
    }
});

route.delete('/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    console.log(token);
    if(payload.admin === false)
        res.status(403).json({ msg: "Do not have admin priveledges!"});
    else{
        User.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
    }
});

module.exports = route;