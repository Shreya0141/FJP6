let fs = require("fs");
console.log("Before");
let f1kapromise = fs.promises.readFile("f1.txt");
let f2kapromise = fs.promises.readFile("f2.txt");

f1kapromise.then(function(data){
    console.log(data + "");
})

f1kapromise.catch(function(error){
    console.log(error);
})

f2kapromise.then(function(data){
    console.log(data + "");
})

f2kapromise.catch(function(error){
    console.log(error);
})

console.log("After");


