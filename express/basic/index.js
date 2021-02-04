const express=require('express');
const app=express();
const {data}=require('./data')

// app get
app.get('/',(req,res)=>{
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
    console.log("Write Page");
    res.write("<h1>A page for Write</h1>");
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
    var flag=data.some(key => key.id==req.params.id);
    
    if(flag){
        var item=data.filter(key => key.id==req.params.id);
        res.send(item)
    }else{
        res.send(`Error ${req.params.id} not found`)
    }
})


// app listen
app.listen(8000,()=>{
    console.log("Testing 8000");
})