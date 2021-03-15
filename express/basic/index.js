const express=require('express'); //import express
const app=express(); 
const {data}=require('./data')
const path=require('path');

const PORT = process.env.PORT || 9000;


// default page setup
app.use(express.static(path.join(__dirname,'public'))) //no need to import the file name


//app get file send
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html')) // file name and directory name import must
     
})

// app get
app.get('/page',(req,res)=>{
    console.log("Hello")
    res.send('Hello From the other Side')
})


// routing
app.get('/about',(req,res)=>{
    console.log("About Page");
    res.send("Hello from the About Page")
})



// Write
app.get('/write',(req,res)=>{
    res.write("<h1>A page for Write</h1>");
    res.write("<h1>The Second Line</h1>");
    res.send();
})


//  JSON
app.get('/json',(req,res)=>{
    console.log("JSON Page");
    res.json([
        {
            id:15101122,
            name:"zahid"
        },
        {
            id:'127(B)',
            name:"Rahman"
        }
    ])
})

//JSON fetch-data
app.get('/api/data',(req,res)=>{
    res.json(data);
})


//JSON fetch single data : dynamic
app.get('/api/data/:id',(req,res)=>{
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


// app listen
app.listen(PORT,()=>{
    console.log("Testing 5000");
})