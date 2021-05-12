const http=require('http');
const server=http.createServer((req,res)=>{
        
        if(req.url=="/"){
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<h1>The Default Page</h1>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        }else if(req.url=="/cool"){

            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<h1>The Cool Page</h1>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        }
});
server.listen(5000);