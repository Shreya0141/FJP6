const puppeteer = require("puppeteer");
const fs = require("fs");

let arr = ['./f1.txt','./f2.txt','./f3.txt','./f4.txt','./f5.txt']
let filepromise = fs.promises.readFile(arr[0]);

for(let i = 1 ; i <arr.length;i++){
    filepromise = filepromise.then(function(data){
        console.log(data+"");
        let newFilepromise = fs.promises.readFile(arr[i]);
        return newFilepromise;
    })
}

filepromise.then(function(data){
    console.log(data+"");
})

























// f1kapromise.then(function(data){
//     console.log(data + "");
//     let f2kapromise = fs.promises.readFile("f2.txt");
//     return f2kapromise;
// }).then(function(data){
//     console.log(data + "");
//     let f3kapromise = fs.promises.readFile("f3.txt");
//     return f3kapromise;
// }).then(function(data){
//     console.log(data + "");
//     let f4kapromise = fs.promises.readFile("f4.txt");
//     return f4kapromise;
// }).then(function(data){
//     console.log(data + "");
//     let f5kapromise = fs.promises.readFile("f5.txt");
//     return f5kapromise;
// }).then(function(data){
//     console.log(data + "");
// })