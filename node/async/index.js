const fs=require('fs');

 // this line will be printed first as async

// creating new folder
fs.mkdir('new_folder',(err)=>{
    console.log("New Folder Has been created")
})

//delete a folder
fs.rmdir('new_folder',(err)=>{
    console.log("The folder has been deleted");
})

// creating new file
fs.writeFile('new_file','cool text is written here',(err)=>{
    console.log("a file and few text has been written");
})


// deleting the file
fs.unlink('new_file',(err)=>{
    console.log("the file has been deleted");
})

// setting new name
fs.rename('file.txt','new_file_name.txt',(err)=>{
    console.log("New name set")
})


// file is being read
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("Printing")



// add some text to file
fs.appendFile('new_file_name.txt','Here is new line',(err)=>{
    console.log("new line has been added")
})