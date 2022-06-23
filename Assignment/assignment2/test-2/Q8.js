// Q- Transducer is a higher order function which takes 3 parameter => an array, a function used for filtering and another function to map values and returns the resultant array without mutation

// which of the following definitions is/are correct?


// A
// function transducer(arr, fFn, mFn) {
//   let nArr = arr.filter(fFn);
//   nArr = nArr.map(mFn);
//   return nArr;
// }


// //B
// function transducer(arr, fFn, mFn) {
//   let nArr = [];
//   for (x in arr) {
//     if (fFn(arr[x])) {
//       nArr.push(arr[x]);
//     }
//   }

//   for (x in nArr) {
//     nArr[x] = mFn(nArr[x]);
//   }
//   return nArr;
// }

// Options:

// 1) A
// 2) B
// 3) Both
// 4) None


//let arr = [1,2,3,4,5,6,7,8,9];
// let narr = arr.map(function(x){
  
//     return 4*x;
  
// })
// console.log(narr);

// let narr = arr.filter(function(x){
//   return x%2 == 0;
// })
// console.log(narr);
//  let narr = arr.reduce(function(prev,ele){
//    return prev+ele;
//  })
//  console.log(narr);

