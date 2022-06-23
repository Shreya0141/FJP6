// spread operator with arr

// let arr = [1,2,3,4,5,6];
// let arr2 = [...arr];

// arr2[2] = 10;
// console.log(arr);
// console.log(arr2);

//spread operator in object(concept of shallow copy)
let obj = {
    name : "Adam",
    address : {
        country : "USA",
        state : {
            statename : "New York",
            pincode : 123456
        }
    }
}

let obj2 = {...obj};
obj2.name = "Shreya";
// obj2.address = {
//     country : "India",
//         state : {
//             statename : "New Delhi",
//             pincode : 110059
//         }
// } 
obj2.address.country = "India";//because it is shallow copy it only indicated to the reference which was stored in the heap and thats why whole change caused to obj also

console.log(obj.name);
console.log(obj2.name);
console.log("\n****************")
console.log(obj.address);
console.log(obj2.address);

//deep copy

let obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.country = "Japan";

console.log(obj.address.country);
console.log(obj3.address.country);


