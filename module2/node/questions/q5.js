let fs = require("fs");
let path = require("path");

let src = path.join(__dirname,"file1.txt");
let des = path.join(__dirname,"new folder","file1.txt");
 fs.copyFileSync(src,des);

 fs.unlinkSync(src);
