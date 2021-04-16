const express=require('express');
const router=express.Router();
const path=require('path');
const root=require('../util/path');

const data=[];

router.get('/',(req,res,next)=>{
    res.status(200).send('<h1>Admin Page Home</h1>')
})



router.get('/addProduct',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})

router.post('/addProduct',(req,res,next)=>{
     
    data.push({title:req.body.title});
    res.redirect('/shop')
})


router.get('/dataSaved',(req,res,next)=>{
    console.log(data);
    res.send('<h1>Data is saved</h1>')
})

 
exports.data=data;
exports.router=router;
