let fs = require ("fs");
let inputArr = process.argv.slice(2);
//console.log(inputArr);

let optionsArr = [];
let filesArr = [];

for(let i = 0 ; i <inputArr.length;i++){
    if(inputArr[i].charAt(0) == "-"){
        optionsArr.push(inputArr[i]);
    }
    else{
       filesArr.push(inputArr[i]);
    }
}

// console.log(optionsArr);
// console.log(filesArr);

function fn(){
    let isBNpresent = optionsArr.includes("-b") && optionsArr.includes("-n");
    if(isBNpresent == true)
    {
           console.log("Please enter either -b or -n");
            return;
    }
 
for(let i = 0 ; i < filesArr.length;i++){
    let ispresent = fs.existsSync(filesArr[i]);
    if(ispresent == false){
        console.log("Please enter correct file name");
        return;
    }
}

let content = "";
for(let i = 0;i < filesArr.length ; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\r\n";
}


let buffer = [];
buffer = content.split("\r\n");
let issPresent = optionsArr.includes("-s");
if(issPresent == true){
    for(let i = 1 ; i < buffer.length;i++){
        if(buffer[i] == "" && buffer[i-1] == ""){
            buffer[i] = null;
        }
        else if(buffer[i] == "" && buffer[i-1]==null){
           buffer[i] = null;
        }
    }
}
// console.log(buffer.join("\n"));

 
let isNpresent = optionsArr.includes("-n");
if(isNpresent == true)
{
    for(let i = 0 ; i < buffer.length; i++){
        buffer[i] = `${i+1}. ${buffer[i]}`;
    }
}

// console.log(buffer.join("\n"));


let isBpresent = optionsArr.includes("-b");
let counter = 1;
if(isBpresent == true){
    for(let i = 0 ; i < buffer.length;i++){
        if(buffer[i] != ""){
            buffer[i] = `${counter}. ${buffer[i]}`;
            counter++;
        }
    }
}
console.log(buffer.join("\n"))
}
fn();


// let tempArr = [];
// for(let i = 0; i < buffer.length;i++){
//    if(buffer[i]!= null){
//        tempArr.push(buffer[i]);
//    }
// }

// buffer = tempArr;
// console.log(buffer);
