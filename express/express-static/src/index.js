const path=require('path');
const express=require('express');
const app=express();

// path to the html file
const staticPath=path.join(__dirname, '../public');

app.use(express.static(staticPath));



app.listen(4000,()=>{
    console.log("Listening 4000 Port");
})