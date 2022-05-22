
let path = require("path");
// console.log(path);

  let extensionname = path.extname("C:\Users\shrey\OneDrive\Desktop\Fjp6\module 2\javascript\node\path.js");
 console.log(extensionname);

 console.log(__dirname);
  console.log(__filename);

 let baseName = path.basename(__filename);
 console.log(baseName);

 let dirPath = __dirname;
 console.log(dirPath);

 let newFilePath = path.join(dirPath,"test.js");
 console.log(newFilePath);





