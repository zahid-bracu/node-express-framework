
const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
});
server.listen(5000);