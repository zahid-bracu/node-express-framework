const EventEmitter=require('events');
const event=new EventEmitter();

// on
event.on('checking',(statusCode,message)=>{
    console.log(`Status Code is ${statusCode} which is ${message}`)
})


// emit
event.emit('checking',200,'ok')