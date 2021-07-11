const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"Content-type":"application/JSON"});
        fs.readFile('userapi.json','utf-8',(err,data)=>{
            const objectData=JSON.parse(data) //parsing
            var name=objectData[4].name; //getting a name from json array
            res.end(name)//sending it to page
        })
    }
})

server.listen(3005,'127.0.0.1',()=>{
    console.log("Port is listening 3005")
})