//make a folder inside this folder and make a file.txt file and add content in it

let fs = require("fs");
let path = require("path");


if(!fs.existsSync("file"))
fs.mkdirSync("file");

let filepath = path.join(__dirname,"file","file.txt");
console.log(filepath);

fs.writeFileSync(filepath,"hello there");