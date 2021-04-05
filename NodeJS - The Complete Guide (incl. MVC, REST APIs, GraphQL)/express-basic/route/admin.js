const express=require('express');
const Router=express.Router();

Router.get('/addProduct',(req,res,next)=>{
     
    res.send('<html><body><form action="/product"  method="POST" > <input type="text" name="title"  /> <button type="submit" value="submit">SUBMIT</button> </form></body></html>')
})

Router.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/')
})

module.exports=Router;