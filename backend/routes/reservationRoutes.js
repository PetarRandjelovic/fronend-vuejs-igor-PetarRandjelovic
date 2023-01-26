
const { sequelize, Broadcast,Cinema,Movie,Dimension,Reservation,Seat,User} = require('../models');
const { reservationSchema } = require('../routes/validation/reservationSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Reservation.findAll({include:['user','seat','broadcast'] })
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Reservation.findOne({ where: { id: req.params.id },include:['user','seat','broadcast'] })
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
            Name: req.body.Name,
            broadcastID: req.body.broadcastID,
            seatID: req.body.seatID,
            userID: req.body.userID,
        }
        await reservationSchema.validateAsync(dataValid, { abortEarly: false });

        
       Broadcast.findOne({ where: { id: req.body.broadcastID } } )
       .then(usr=>{
        if(usr!=null || usr!=undefined)
        Seat.findOne({ where: { id: req.body.seatID } } )
        .then(usr=>{
         if(usr!=null || usr!=undefined)
         User.findOne({ where: { id: req.body.userID } } )
         .then(usr=>{
          if(usr!=null || usr!=undefined)
          Reservation.create({ Name: req.body.Name , broadcastID: req.body.broadcastID, seatID: req.body.seatID, userID: req.body.userID})
          .then( rows => res.json(rows) )
          .catch( err => res.status(500).json(err) );

          else 
          return res.status(400).json({ msg: "Not valid id!"});
         }
      )
         else 
         return res.status(400).json({ msg: "Not valid id!"});
       
        }
     )
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
                Name: req.body.Name,
                broadcastID: req.body.broadcastID,
                seatID: req.body.seatID,
                userID: req.body.userID,
            }
            await reservationSchema.validateAsync(dataValid, { abortEarly: false });
        

            Broadcast.findOne({ where: { id: req.body.broadcastID } } )
            .then(usr=>{
             if(usr!=null || usr!=undefined)
             Seat.findOne({ where: { id: req.body.seatID } } )
             .then(usr=>{
              if(usr!=null || usr!=undefined)
              User.findOne({ where: { id: req.body.userID } } )
              .then(usr=>{
               if(usr!=null || usr!=undefined)
         Reservation.findOne({ where: { id: req.params.id } })
            .then( usr => {

                usr.Name = req.body.Name;
                usr.broadcastID = req.body.broadcastID;
                usr.seatID = req.body.seatID;
                usr.userID = req.body.userID;
                usr.save()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );


            else 
            return res.status(400).json({ msg: "Not valid user id!"});
           }
        )
           else 
           return res.status(400).json({ msg: "Not valid seat id!"});
         
          }
       )
       else 
       return res.status(400).json({ msg: "Not valid broadcast id!"});
        
          
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

route.delete('/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    if(payload.admin === false && payload.moderator === false)
        res.status(403).json({ msg: "Do not have admin or moderator priveledges!"});
    else{
    Reservation.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
});

module.exports = route;