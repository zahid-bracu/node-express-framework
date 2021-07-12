const {data}=require('./data')
const path=require('path');


const getPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
}


const helloPage=(req,res)=>{
    console.log("Hello")
    res.send('Hello From the other Side')
}


const aboutPage=(req,res)=>{
    console.log("About Page");
    res.send("Hello from the About Page")
}


const writePage=(req,res)=>{
    res.write("<h1>A page for Write</h1>");
    res.write("<h1>The Second Line</h1>");
    res.send();
}


module.exports={getPage,helloPage,aboutPage,writePage};