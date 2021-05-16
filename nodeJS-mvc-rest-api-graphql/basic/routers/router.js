const fs=require('fs');  //fs module import for crud file & folder

const requestHanlder =(req,res)=>{
    //req=request & res=response
    
    //request description
    console.log("Running");
    console.log(req);
    console.log(req.url, req.method, req.headers );


    // routing
    if(req.url==='/'){
        
        res.setHeader('Content-Type','text/html'); //sending header & it's value
        
        //HTML files is being written for sending as response
        
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'); 
      


        // response is being sent
        return res.end();
    }else if(req.url==='/message'){

        // an array to keep passed data from client site
        const body=[];
        
        // passed data is being pushed to an array
        //request - on - data : is event listener to listen the data passed from client
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })

        
        // request - on - end : is event listener which is execute after data is passed and saved in array
        return req.on('end',()=>{

            //data processing
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const message=parseBody.split('=')[1];
            
            //after data processing data is saved into and txt file
            fs.writeFile('message.txt',message,()=>{
                res.statusCode=302;
                res.setHeader('Location','/submitted');
                return res.end();
            });
        })  
    }else if(req.url==='/submitted'){
        res.setHeader('Content-Type','text/html'); 
        res.write('<h1>The form is submitted</h1>');
        return res.end();
    }
    

    // response description
    res.setHeader('Content-Type','text/html');
    res.write('<h1>This is response Page</h1>');
    res.end();


    // process.exit();
}

module.exports=requestHanlder;