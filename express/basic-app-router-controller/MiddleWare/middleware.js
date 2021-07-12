const firstMiddleWare=(req,res,next)=>{
    console.log(req);
    next();
}



const secondMiddleWare=(req,res,next)=>{
    console.log(req);
    next();
}

module.exports={secondMiddleWare,firstMiddleWare};