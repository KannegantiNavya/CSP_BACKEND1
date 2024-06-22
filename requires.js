const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const info = require('./Routes/info');
const signup=require('./Routes/signup');
const login=require('./Routes/login');
const sellplant=require('./Routes/sellplant')
const contactus=require('./Routes/contactus')
const example=require('./Routes/nonflplants')


const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("successs");
})

app.use('/info', info);
app.use('/signup',signup);
app.use('/login',login);
app.use('/sellplant',sellplant);
app.use('/contactus',contactus)
app.use('/example',example)

module.exports = app;