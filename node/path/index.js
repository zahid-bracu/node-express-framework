const path=require('path');

// directory name
var directoryName=path.dirname('G:/Web_Dev_Final_Projects/node-express-framework/path/index.js');
console.log("Dir name : "+directoryName);


// file extension name
var extensionName=path.extname('G:/Web_Dev_Final_Projects/node-express-framework/path/index.js');
console.log("File Extension name : "+extensionName);


//file basename
var baseName=path.basename('G:/Web_Dev_Final_Projects/node-express-framework/path/index.js');
console.log("BaseName : "+baseName);


//parsing and object
var info=path.parse('G:/Web_Dev_Final_Projects/node-express-framework/path/index.js');
console.log(info);

 