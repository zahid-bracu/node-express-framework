const express=require('express'); //import express
const app=express(); 
var bodyParser = require('body-parser');
var cors = require('cors');
const {router}=require('./router');

const PORT = process.env.PORT || 9000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.use(router);


// app listen
app.listen(PORT,()=>{
    console.log(`Testing ${PORT}`);
})