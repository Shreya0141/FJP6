//map,reduce,filter

//map 
let arr = [1,2,3,4,5,6];
 //function myMap(arr,cb){
//     let newArr = [];
//     for(let i = 0; i <arr.length;i++){
//         let ele = arr[i];
//         newArr.push(cb(ele));
//     }
// return newArr;
// }

// let b = myMap(arr,function(x){return 5*x});
// console.log(b);


//filter
// function myFilter(arr,cb){
//     let newArr = [];
//     for(let i = 0; i <arr.length;i++){
//         let ele = arr[i];
//         if(cb(ele)){
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }

// let c = myFilter(arr,function(x){return x%2 == 1});
// console.log(c);


//reduce
//function myReduce(arr,cb){
//  let newArr = [];
//     for(let i = 0 ; i < arr.length;i++){
//         let ele = arr[i];
//         newArr.push(cb(ele,ele));
//     }
//     return newArr;
// }

// let d = myReduce(arr,function(prev,ele){return prev + ele })
// console.log(d);


//set timeout

// setTimeout(function(){
//     console.log("Hello");
// },5000)

// console.log("world")

//set timeinterval
// setInterval(function(){
//     console.log("hello");
// },3000)

//how to stop printing in interval time
// let intervelId =  setInterval(function(){
//         console.log("hello");
//      },3000);
//      setTimeout(function(){
//          clearInterval(intervelId);
//      },10000);


setTimeout(function(){
    console.log("will i ever run");
},1000);

let counter = 1;
while(true){
    console.log(counter++);
}