const http=require('http');
const server=http.createServer((req,res)=>{
        
        if(req.url=="/"){
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'); 
            res.write('</body>');
            res.write('</html>');
            return res.end();
        }
        if(req.url=="/message" ){
            
            res.statusCode=302; //status code
            res.setHeader("Location","/")
            return res.end();
        }

        // wrong page input
            res.setHeader('Content-Type','text/html');
            res.write('<h1>Wrong Page</h1>');
            res.end();
});
server.listen(5000);