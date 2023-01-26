const { sequelize, Cast,Actor} = require('../models');
const { castSchema } = require('../routes/validation/castSchema');
const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
   
    Cast.findAll()
            .then( rows => {console.log(rows); return res.json(rows)} )
            .catch( err => res.status(500).json(err) );
    
});

route.get('/:id', (req, res) => {

    Cast.findOne({ where: { id: req.params.id } })
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
            actorID: req.body.actorID,
            movieID: req.body.movieID,
        }
        await castSchema.validateAsync(dataValid, { abortEarly: false });

        
   Actor.findOne({ where: { id: req.body.actorID } } )
       .then(usr=>{
        if(usr!=null || usr!=undefined)
        Actor.findOne({ where: { id: req.body.actorID } } )
        .then(usr=>{
         if(usr!=null || usr!=undefined)
        Cast.create({ actorID: req.body.actorID , movieID: req.body.movieID})
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
                actorID: req.body.actorID,
                movieID: req.body.movieID,
            }
            await castSchema.validateAsync(dataValid, { abortEarly: false });
        
            Actor.findOne({ where: { id: req.body.actorID } } )
            .then(usr=>{
             if(usr!=null || usr!=undefined)
             Actor.findOne({ where: { id: req.body.actorID } } )
             .then(usr=>{
              if(usr!=null || usr!=undefined)

         Cast.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.actorID = req.body.actorID;
                usr.movieID = req.body.movieID;
                usr.save()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
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

route.delete('/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1].split('\.')[1];
    payload = JSON.parse(atob(token));
    if(payload.admin === false && payload.moderator === false)
        res.status(403).json({ msg: "Do not have admin or moderator priveledges!"});
    else{
    Cast.findOne({ where: { id: req.params.id } })
            .then( usr => {
                usr.destroy()
                    .then( rows => res.json(rows) )
                    .catch( err => res.status(500).json(err) );
            })
            .catch( err => res.status(500).json(err) );
        }
});

module.exports = route;