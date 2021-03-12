const path=require('path');

// directory name
var directoryName=path.dirname(__dirname);
console.log("Dir name : "+directoryName);


// file extension name
var extensionName=path.extname(__filename);
console.log("File Extension name : "+extensionName);


//file basename
var baseName=path.basename(__filename);
console.log("BaseName : "+baseName);


//parsing and object
var info=path.parse(__filename);
console.log(info);

