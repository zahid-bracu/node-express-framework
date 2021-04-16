const bodyParser = require('body-parser')
const express=require('express');
const AdminRoute=require('./route/admin.js');
const ShopRoute=require('./route/shop.js')
const path=require('path');
var cors = require('cors')
const root=require('./util/path'); // directory root set
require('dotenv').config()

const app=express();
const PORT=process.env.port;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('public')) // status file set
app.use('/admin',AdminRoute.router);
app.use('/shop',ShopRoute);


app.use((req,res)=>{
    res.sendFile(path.join(root,'views', '404-page.html'));
})

app.listen(PORT)