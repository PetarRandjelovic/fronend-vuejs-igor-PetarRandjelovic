const { sequelize, Broadcast,Cinema,Movie,Dimension} = require('../models');
const { broadcastSchema } = require('../routes/validation/broadcastSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Broadcast.findAll( {include:['dimension','movie','cinema']})
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Broadcast.findOne({ where: { id: req.params.id },include:['dimension','movie','cinema'] })
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
            dimensionID: req.body.dimensionID,
            cinemaID: req.body.cinemaID,
            movieID: req.body.movieID,
        }
        await broadcastSchema.validateAsync(dataValid, { abortEarly: false });

        
       Dimension.findOne({ where: { id: req.body.dimensionID } } )
       .then(usr=>{
        if(usr!=null || usr!=undefined)
        Cinema.findOne({ where: { id: req.body.cinemaID } } )
        .then(usr=>{
         if(usr!=null || usr!=undefined)
         Movie.findOne({ where: { id: req.body.movieID } } )
         .then(usr=>{
          if(usr!=null || usr!=undefined)
          Broadcast.create({ dimensionID: req.body.dimensionID , cinemaID: req.body.cinemaID, movieID: req.body.movieID,})
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
                dimensionID: req.body.dimensionID,
                cinemaID: req.body.cinemaID,
                movieID: req.body.movieID,
            }
            await broadcastSchema.validateAsync(dataValid, { abortEarly: false });
        


            Dimension.findOne({ where: { id: req.body.dimensionID } } )
            .then(usr=>{
             if(usr!=null || usr!=undefined)
             Cinema.findOne({ where: { id: req.body.cinemaID } } )
             .then(usr=>{
              if(usr!=null || usr!=undefined)
              Movie.findOne({ where: { id: req.body.movieID } } )
              .then(usr=>{
               if(usr!=null || usr!=undefined)

         Broadcast.findOne({ where: { id: req.params.id } })
            .then( usr => {

                usr.dimensionID = req.body.dimensionID;
                usr.cinemaID = req.body.cinemaID;
                usr.movieID = req.body.movieID;
                usr.save()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
            
            else 
            return res.status(400).json({ msg: "Not valid movie id!"});
           }
        )
           else 
           return res.status(400).json({ msg: "Not valid cinema id!"});
         
          }
       )
       else 
       return res.status(400).json({ msg: "Not valid dimension id!"});
        
          
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
    Broadcast.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
});

module.exports = route;