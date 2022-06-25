// //write a function to add and print their sum

// let regularfunction = function(a,b){
//     console.log(a+b);
// }
// regularfunction(1,2);//using regular function



// let add = (a,b)=>{
//     console.log(a+b);
// }

// add(1,2);//using arrow function


// let arrowFunction = ()=>{
//     console.log(this);
// }
// arrowFunction();//in this (THIS) depends upon its parent scope means parent function //Arrow function resolve its this lexically.

let obj = {
    name:"Shreya",
    age : 20,
    showDetails : function(){
        console.log(this.name + " " + this.age);
    },
    showDetailsArrow: ()=>{
        console.log(this);
        console.log(this.name + " " + this.age);//undefined undefined because its parent function is empty
    }

}

obj.showDetails();
obj.showDetailsArrow();
