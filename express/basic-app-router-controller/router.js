const express = require('express');
const router=express.Router();
const {data}=require('./data')
const path=require('path');
const {getPage,helloPage,aboutPage,writePage,sendJson,showName,dynamicDataShow} =require('./controller');

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

// dynamic name from params
router.get('/dynamic/:name',showName);

//JSON fetch single data : dynamic
router.get('/api/data/:id',dynamicDataShow)


module.exports={router};