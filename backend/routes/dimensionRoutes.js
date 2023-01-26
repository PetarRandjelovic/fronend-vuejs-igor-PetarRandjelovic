const { sequelize, Dimension} = require('../models');
const { dimensionSchema } = require('../routes/validation/dimensionSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Dimension.findAll()
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Dimension.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/:name', (req, res) => {

    Dimension.findOne({ where: { name: req.params.name } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    if(payload.admin === false && payload.moderator === false)
        res.status(403).json({ msg: "Do not have admin or moderator priveledges!"});
    else{
    try{
        const dataValid = {
            name: req.body.name,
        
        }
        await dimensionSchema.validateAsync(dataValid, { abortEarly: false });
      
        
       Dimension.create({ name: req.body.name  })
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
    if(payload.admin === false && payload.moderator === false)
        res.status(403).json({ msg: "Do not have admin or moderator priveledges!"});
    else{
        try{
            
            const dataValid = {
                name: req.body.name,
            }
            await dimensionSchema.validateAsync(dataValid, { abortEarly: false });
        
         Dimension.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.name = req.body.name;
              
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
    if(payload.admin === false && payload.moderator === false)
        res.status(403).json({ msg: "Do not have admin or moderator priveledges!"});
    else{
        Dimension.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
});

module.exports = route;