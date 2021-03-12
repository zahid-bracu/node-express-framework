const fs=require('fs');

//creating a folder
fs.mkdirSync('new_folder');
//remove the folder
fs.rmdirSync('new_folder');

//creating a file and add some text to it
fs.writeFileSync('file.txt','A file has been created.');

//add some text to existed file
fs.appendFileSync('file.txt','A line has been added.');

//read some file as binary value
const buffer_read=fs.readFileSync('file.txt');
//convert the binary value into string or text
const original_text=buffer_read.toString();
console.log(original_text);

// create file again
fs.writeFileSync('newFile.txt','A line is written.');
// rename a file
fs.renameSync('newFile.txt','newName.txt'); // renaming file name
//delete the file
fs.unlinkSync('newName.txt');