const EventEmitter=require('events');
const event=new EventEmitter();

// event one

// on -- event-fire
event.on('checking',(statusCode,message)=>{
    console.log(`Status Code is ${statusCode} which is ${message}`)
})
// emit
event.emit('checking',200,'ok')



// event two

// on 1
event.on('sayMyName',(name)=>{
    console.log(`What's my name? ${name}`)
})
// on 2
event.on('sayMyName',()=>{
    console.log("What's my name? Rahman")
})
//emit
event.emit('sayMyName','zahid');