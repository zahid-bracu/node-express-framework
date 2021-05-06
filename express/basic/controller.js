const {data}=require('./data')
const path=require('path');


const getPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
}

module.exports={getPage};