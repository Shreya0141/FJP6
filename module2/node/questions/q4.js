let fs = require("fs");
let path = require("path");

let folderpath = path.join(__dirname,"..","unorganised");
console.log(folderpath); 

let content = fs.readdirSync(folderpath);
console.log(content);

let extarr=[];

for(let i = 0;i<content.length;i++ ){
    let name = content[i];
    let extName = path.extname(name);
    extarr.push(extName);
}
console.log(extarr);