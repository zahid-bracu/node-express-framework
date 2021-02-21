
const fs=require('fs'); //importing fs module
const http=require('http'); //importing http server creation module

const server=http.createServer(); // creating http server


//server pages are creating
server.on('request',(req,res)=>{ 
   
    // creating streaming file 
     const rstream=fs.createReadStream('file.txt');

     
     rstream.on("data",(chunkdata)=>{
         res.write(chunkdata);
     })

     rstream.on('end',()=>{
         res.end();
     })

     rstream.on('error',(err)=>{
         console.log(err);
         res.end('file not found');
     })
})


server.listen(8000,'127.0.0.1',()=>{
    console.log("Port Working 800")
})