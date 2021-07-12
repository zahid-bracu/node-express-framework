const express=require('express'); //import express
const app=express(); 
var bodyParser = require('body-parser');
var cors = require('cors');
const {router}=require('./router');
const {firstMiddleWare,secondMiddleWare}=require('./MiddleWare/middleware');

const PORT = process.env.PORT || 9000;

// static file serving
//app.use(express.static(__dirname,'public'))

//need to add all those - : bodyparser & cors & express.json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

// using middle ware
app.use(firstMiddleWare);
app.use(secondMiddleWare);

// using all routes here
app.use(router);


// app listen
app.listen(PORT,()=>{
    console.log(`Testing ${PORT}`);
})