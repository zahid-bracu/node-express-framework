const bodyParser = require('body-parser')
const express=require('express');
const AdminRoute=require('./route/admin.js');
const ShopRoute=require('./route/shop.js')
const path=require('path');
const root=require('./util/path'); // directory root set

const app=express();
const PORT=5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public')) // status file set
app.use('/admin',AdminRoute.router);
app.use('/shop',ShopRoute);


app.use((req,res)=>{
    
    res.sendFile(path.join(root,'public','views', '404-page.html'));
})

app.listen(PORT)  