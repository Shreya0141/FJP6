function sayHello(){
    console.log("hello to functions");
}

sayHello();

function add(num1,num2){
    let addition = num1 + num2;
    console.log("addition of two numbers is :" + addition);
}
add(3,5);

function multiply(num1,num2){
    return num1*num2;
}

let ans = multiply(4,5);
console.log(ans);

let a = function sun(n1,n2){
    return n1-n2;
}

console.log(a(10,5));

function rem(n1,n2){
    let remainder = n1 % n2;
    console.log("Remainder of n1 and n2 is :"+ remainder);
}
rem(15,6);

(function(){
    console.log("Hello from IIFE");
})();

(function(n1,n2){
    console.log(n1/n2);
})(10,5);

(function(n1,n2){
    console.log(n1+n2);
})(2,6);

(function(n1,n2){
    console.log(n1*n2);
})(10,5);