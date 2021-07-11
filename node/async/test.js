const fs=require('fs');
fs.rename('TestFolder','ChangedName',(err)=>{
 if(err){
  console.log("There is "+err);
 }else{
  console.log("Folder has been created");
 }
});