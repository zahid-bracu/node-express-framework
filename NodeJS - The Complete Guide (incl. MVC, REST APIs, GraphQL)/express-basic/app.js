const bodyParser = require('body-parser')
const express=require('express');
const AdminRoute=require('./route/admin.js');
const ShopRoute=require('./route/shop.js')

const app=express();
const PORT=5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(AdminRoute);
app.use(ShopRoute);


app.listen(PORT)  