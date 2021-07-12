const http=require('http');
 

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from the other side Spooky");
    }else if(req.url=="/about"){
        res.end("This is about page")
    }else if(req.url=="/contact"){
        res.end("this is contact page");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>this is wrong page</h1>")
    }
})


server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running on port 8000");
})