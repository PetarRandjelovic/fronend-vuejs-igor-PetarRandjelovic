const { sequelize, Directing,Director,Movie} = require('../models');
const { directingSchema } = require('../routes/validation/directingSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Directing.findAll()
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Directing.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/:teamDirectors', (req, res) => {

    Directing.findOne({ where: { teamDirectors: req.params.teamDirectors } })
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
            teamDirectors: req.body.teamDirectors,
            directorID: req.body.directorID,
            movieID: req.body.movieID,
        }
        await directingSchema.validateAsync(dataValid, { abortEarly: false });

        
       Director.findOne({ where: { id: req.body.directorID } } )
       .then(usr=>{
        if(usr!=null || usr!=undefined)
        Movie.findOne({ where: { id: req.body.movieID } } )
        .then(usr=>{
         if(usr!=null || usr!=undefined)


         
         Directing.create({ teamDirectors: req.body.teamDirectors , directorID: req.body.directorID, movieID: req.body.movieID,})
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
                teamDirectors: req.body.teamDirectors,
                directorID: req.body.directorID,
                movieID: req.body.movieID,
            }
            await directingSchema.validateAsync(dataValid, { abortEarly: false });
        

            Director.findOne({ where: { id: req.body.directorID } } )
            .then(usr=>{
             if(usr!=null || usr!=undefined)
             Movie.findOne({ where: { id: req.body.movieID } } )
             .then(usr=>{
              if(usr!=null || usr!=undefined)
         Directing.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.teamDirectors = req.body.teamDirectors;
                usr.directorID = req.body.directorID;
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
        return res.status(400).json({ msg: "Not valid director id!"});
         
           
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
        Directing.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
});

module.exports = route;