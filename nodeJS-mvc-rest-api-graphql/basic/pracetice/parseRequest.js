const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
        
        if(req.url=="/"){
            res.setHeader('Content-Type','text/html');
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'); 
            return res.end();
        }
        if(req.url=="/message" ){

            // ********** parsing and storing start ***************
            const body=[];
            req.on('data',(chunk)=>{
                body.push(chunk);
            })

            req.on('end',()=>{
                const parseBody=Buffer.concat(body).toString();
                const message=parseBody.split("=");
                console.log(message[1]);
                fs.writeFileSync("Message",message[1]);
            })
            // ********** parsing and storing ends ***************

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