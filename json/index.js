const fs=require('fs');

var bioData={
    name:"Zahid",
    occupation:"Software Developer",
    id:"facebook/zahidur"
}


// stringify & save data in folder
var jsonData=JSON.stringify(bioData)
fs.writeFile('json.txt',jsonData,(err)=>{
    console.log("Created & Saved Successfully");
})

// read file
var fileRead=fs.readFile('json.txt','utf-8',(err,data)=>{
    // data parse & read
    data=JSON.parse(data);
    console.log(data);
})
 
 