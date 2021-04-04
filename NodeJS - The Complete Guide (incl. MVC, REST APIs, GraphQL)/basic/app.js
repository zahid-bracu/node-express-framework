const http=require('http'); //http import to create server
const router=require("./routers/router");


// creating a server
const server=http.createServer(router);

server.listen(4000);  