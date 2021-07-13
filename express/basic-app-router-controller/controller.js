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

const showName=(req,res)=>{
    res.status(300).send(req.params.name);
}

const dynamicDataShow=(req,res)=>{
    var flag=data.some(key => key.id==req.params.id); // filtering data from data file to check if data is existed or not
    console.log(req.query); // checking the query
    // http://localhost:9000/api/data/3?sort=asc
    if(flag){
        var item=data.filter(key => key.id==req.params.id);
        res.send(item)
    }else{
        res.send(`Error ${req.params.id} not found`)
    }
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
module.exports={getPage,helloPage,aboutPage,writePage,sendJson,showName,dynamicDataShow};