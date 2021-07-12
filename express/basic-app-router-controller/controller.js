const {data}=require('./data')
const path=require('path');

// send File
const getPage=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'public','index.html'))
}

// send String
const helloPage=(req,res)=>{
    console.log("Hello")
    res.status(200).send('Hello From the other Side')
}


const aboutPage=(req,res)=>{
    console.log("About Page");
    res.status(202).send("Hello from the About Page")
}


// send HTML with Write
const writePage=(req,res)=>{
    res.write("<h1>A page for Write</h1>");
    res.write("<h1>The Second Line</h1>");
    res.status(203).send();
}


// send Json
const sendJson=(req,res)=>{
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
}
module.exports={getPage,helloPage,aboutPage,writePage,sendJson};