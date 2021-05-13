const http=require('http');
const server=http.createServer((req,res)=>{
        
        if(req.url=="/"){
            res.setHeader('Content-Type','text/html');
            res.write('<h1>The Default Page</h1>');
            return res.end();
        }else if(req.url=="/cool"){
            res.setHeader('Content-Type','text/html');
            res.write('<h1>The Cool Page</h1>');
            return res.end();
        }

        // wrong page input
            res.setHeader('Content-Type','text/html');
            res.write('<h1>Wrong Page</h1>');
            res.end();
});
server.listen(5000);