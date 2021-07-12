const express = require('express');
const router=express.Router();
const {data}=require('./data')
const path=require('path');
const {getPage,helloPage,aboutPage,writePage,sendJson} =require('./controller');

// default page setup
router.use(express.static(path.join(__dirname,'public'))) //no need to import the file name


//router get file send
router.get('/',getPage);

// router get
router.get('/page',helloPage);


// routing
router.get('/about', aboutPage)



// Write
router.get('/write',writePage);


//  JSON
router.get('/json',sendJson);

//JSON fetch-data
router.get('/api/data',(req,res)=>{
    res.json(data);
})


//JSON fetch single data : dynamic
router.get('/api/data/:id',(req,res)=>{
    var flag=data.some(key => key.id==req.params.id); // filtering data from data file
    console.log(req.query); // checking the query
    // http://localhost:8000/api/data/3?sort=asc
    if(flag){
        var item=data.filter(key => key.id==req.params.id);
        res.send(item)
    }else{
        res.send(`Error ${req.params.id} not found`)
    }
})


module.exports={router};