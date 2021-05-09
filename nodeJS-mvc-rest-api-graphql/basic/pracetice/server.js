//Creating HTTP server & Listen
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);

    // exit the event loop
    process.exit(); 
});
server.listen(5000);