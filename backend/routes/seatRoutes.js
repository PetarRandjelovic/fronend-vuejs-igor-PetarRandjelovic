const { sequelize, Seat,Cinema} = require('../models');
const { seatSchema } = require('../routes/validation/seatSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Seat.findAll()
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Seat.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/:SeatNumber', (req, res) => {

    Seat.findOne({ where: { SeatNumber: req.params.SeatNumber } })
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
            SeatNumber: req.body.SeatNumber,
            cinemaID: req.body.cinemaID,
        }
        await seatSchema.validateAsync(dataValid, { abortEarly: false });
      
    Cinema.findOne({ where: { id: req.body.cinemaID } } )
    .then(usr=>{
     if(usr!=null || usr!=undefined )
    
     Seat.create({ SeatNumber: req.body.SeatNumber,   cinemaID: req.body.cinemaID, })
     .then( rows => res.json(rows) )
     .catch( err => res.status(500).json(err) );

     else 
     return res.status(400).json({ msg: "Not valid id!"});
    }
 )
 
        
       
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
                SeatNumber: req.body.SeatNumber,
                cinemaID: req.body.cinemaID,
            }
            await seatSchema.validateAsync(dataValid, { abortEarly: false });
        
         Seat.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.SeatNumber = req.body.SeatNumber;
                usr.cinemaID = req.body.cinemaID;
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
        Seat.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        } 
});

module.exports = route;