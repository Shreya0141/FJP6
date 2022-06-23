//array

//let arr = [1,2,3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
//  console.log(a);
//  console.log(b);
//  console.log(c);

//  let[a,b,c,d=0] = arr;//destructuring
//  console.log(a);
//  console.log(b);
//  console.log(c);
//console.log(d);
 
//object 
// let obj = {
//     name: "Shreya",
//         country : "India",
//         pincode : 12345
// }

// //let {name,pincode} = obj;
// //let {pincode,name} = obj;

// console.log(pincode);

//nested object
let obj = {
    name : "Adam",
    address : {
        country : "USA",
        state : {
            stateName: "New York",
            pincode : 12345
        }
    }
}

let {name} = obj;
console.log(name);

let {address:{country:cd}} = obj;
console.log(cd);

let {address:{state:{pincode}}} = obj;
console.log(pincode);
