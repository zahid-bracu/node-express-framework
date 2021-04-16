const express=require('express');
const Router=express.Router();
const path=require('path');
const admin = require('./admin.js')
Router.get('/',(req,res,next)=>{
    console.log(admin.data);
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})


module.exports=Router;