const os=require('os');


// windows bit
const bits=os.arch()
console.log("Windows Bit : "+bits);


// hostname bit
const hostname=os.hostname()
console.log("Hostname : "+hostname);

//platform
const platform=os.platform();
console.log("Platform : "+platform);


// temp dir
const temp_dir=os.tmpdir()
console.log("Temp directory : "+temp_dir);


//type dir
const type=os.type();
console.log("OS Type : "+type);


// windows free memory
let freeMemory=os.freemem();
freeMemory=freeMemory/1024/1024/1024;
console.log("Free Memory : "+freeMemory);


//total memory
let totalMemory=os.totalmem();
totalMemory=totalMemory/1024/1024/1024;
console.log("Total Memory : "+totalMemory);


// getting directory name
console.log(__dirname);


// getting file name
console.log(__filename);