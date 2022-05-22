let fs = require("fs");
// console.log(fs);

 let path = require("path");
// let filepath = path.join(__dirname,"file.txt");
// console.log(filepath);

// fs.writeFileSync(filepath,"Hello ");

// console.log("before update:");
// let content = fs.readFileSync(filepath,"utf-8");
// console.log(content);


//  fs.appendFileSync(filepath,"\nnewly added content");
//  console.log("After update:");
// console.log(fs.readFileSync(filepath,"utf-8"));

// fs.unlinkSync(filepath);

// //making a directory
// if(!fs.existsSync("humaridirectory"))
// fs.mkdirSync("humaridirectory");


//reading a directory
// let folderpath = "D:\\Fjp6\\module1";
// let contentoffolder = fs.readdirSync(folderpath);
// console.log(contentoffolder);

// //delete a directory
//  fs.rmdirSync("humaridirectory");


 //copy a file
 let Sourcepath = path.join(__dirname,"file.txt");
 let Destinationpath = path.join(__dirname,"module","file.txt");
 console.log(Sourcepath);
 console.log(Destinationpath);

 fs.copyFileSync(Sourcepath,Destinationpath);