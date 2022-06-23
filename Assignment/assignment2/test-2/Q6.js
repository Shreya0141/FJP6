// How to implement setInterval of your own using setTimeout

// Solution:
let interval = setInterval(function(){
    console.log("Hello");
},3000);

setTimeout(function(){
    clearInterval(interval);
},10000);