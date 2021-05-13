const http=require('http');
const server=http.createServer((req,res)=>{
        
        if(req.url=="/"){
            res.setHeader('Content-Type','text/html');         
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'); 
            return res.end();
        }
        if(req.url=="/message" ){

            res.setHeader('Content-Type','text/html');
            res.write('<h1>Submitted</h1>');
            return res.end();
        }

        // wrong page input
        res.setHeader('Content-Type','text/html');
            res.write('<h1>Wrong Page</h1>');
            res.end();
});
server.listen(5000);