let cp = require('child_process');
// console.log(cp);

// cp.execSync("calc");
// cp.execSync("code");

let content = cp.execSync(" node test.js");
console.log("test.js file:"+content);