const os=require('os');


// windows bit
const bits=os.arch()
console.log(bits);


// hostname bit
const hostname=os.hostname()
console.log(hostname);

//platform
const platform=os.platform();
console.log(platform);


// temp dir
const temp_dir=os.tmpdir()
console.log(temp_dir);


//type dir
const type=os.type();
console.log(type);


// windows free memory
let freeMemory=os.freemem();
freeMemory=freeMemory/1024/1024/1024;
console.log(freeMemory);


//total memory
let totalMemory=os.totalmem();
totalMemory=totalMemory/1024/1024/1024;
console.log(totalMemory);


// getting directory name
console.log(__dirname);


// getting file name
console.log(__filename);