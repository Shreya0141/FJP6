console . log("hello shreya");
console . log("shreya");
let num = 20;
console .log (num);
let char = "a";
console .log(char);
let str = "i am string";
console . log(str);
let bool = true;
console.log(bool); 
for(let i = 1; i <= 5 ; i++){
    console.log(i);
}
let count = 10;
 while(count > 0){
     console.log(count);
     count--;
}

let n = 17;
let isPrime = true;

for(let i = 2; i*i <= n; i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Prime");
}else{
    console.log(" NotPrime");
}