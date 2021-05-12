//Creating HTTP server & Listen
const http=require('http');
const server=http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>The form is submitted</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
});
server.listen(5000);