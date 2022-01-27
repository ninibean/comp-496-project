import express from "express";
import mongoose from "mongoose";
import theGpa from './dbGpa.js';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://dimitrilaw:gpaclass@cluster0.re0zl.mongodb.net/gpadb?retryWrites=true&w=majority'

//DB Confih
mongoose.connect(connection_url, {
  
});



//API END Point
app.get('/', (req,res) =>res.status(200).send("HELLO Everyone"));

//push information
app.post('/gpagenie/gpa', (req, res) =>{
    const dbGpas = req.body;

    theGpa.create(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        
        }else{
            res.status(201).send(data)
        }
    })
});

//get information

app.get('/gpagenie/gpa', (req, res) =>{

    theGpa.find(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        
        }else{
            res.status(200).send(data)
        }
    })
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));

// nodemon server.js