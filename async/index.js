const fs=require('fs');

// new file creation
fs.writeFile('file.txt','This is new Line',(err)=>{
    console.log("New file has been created");
})


// how to read file with call-back
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("Printing") // this line will be printed first as async