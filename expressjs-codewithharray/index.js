const express=require('express');
const path=require('path');

const app=express();
const port= 4000;


app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Main Page</h1>`)
})

// sending HTML code + status code
app.get('/about',(req,res)=>{
    res.status(400).send(`<h1>About</h1>`)
})

// sending HTML file + status code
app.get('/home',(req,res)=>{
    res.status(500).sendFile(path.join(__dirname,'index.html'));
})

// sending json data + status code
app.get('/json',(req ,res)=>{
    res.status(500).json({"name":"zahid","id":15101122});
})

//listening to the port
app.listen(port,'127.0.0.1',(err)=>{
    console.log(`Port is Listening : ${port}`);
})