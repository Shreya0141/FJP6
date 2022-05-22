//copy index.html from module1 to a new folder inside module 2 having name html
let fs = require("fs");
let path = require("path");

let src = path.join(__dirname,"..","..","..","module1","index.html");
console.log(src);
let des = path.join(__dirname,"..","..","index.html");
console.log(des);

fs.copyFileSync(src,des);
