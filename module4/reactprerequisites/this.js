//this is an object
//this keyword's value depend upon how it is called
//1.function invocation = obj()[normal call] - it return global object
//2.method invocation = obj.def()[call with a dot] - it returns the object which is called i.e. obj

console.log("this inside a function",this);//it will return empty object

let obj = {
    name: "Shreya",
    age:20,
    add : function(){
       function klm(){
        console.log(this);

       } 
       klm();//function invocation
    //console.log(this);
    }
}

obj.add();//method invocation
console.log("$$$$$$$$$$$$$$$$$$$$$$$4");
let ghi = obj.add;
ghi();//function invocation 