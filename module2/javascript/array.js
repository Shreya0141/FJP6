let arr = [];
console.log(arr); 

let elearr = [1,2,3,4,"hello",false,'c',4.5];
console.log(elearr);

console.log("element at 4th index:"+ elearr[4]);
console.log("element at 3rd index:"+ elearr[3]);

elearr[3]= "Nothing";
elearr[7] = 566;
console.log(elearr);

console.log("############ ");
console.log("Array before push", elearr);
elearr.push ("new item");
console.log("Array after push", elearr);

elearr.pop();
console.log("Array after pop", elearr);


console.log("array before shift",elearr);
elearr.shift();
console.log("array after shift",elearr);


console.log("array before unshift",elearr);
elearr.unshift('newly added item');
console.log("array after unshift",elearr);

let len=elearr.length;
console.log(len);
