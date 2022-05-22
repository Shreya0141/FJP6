function promisifiedfunc(){
    return new Promise(function(resolve,reject){
        let a = 3;
        let b = 2;
        if(a == 1){
            resolve("Equal");
        }
        else{
            reject("Unequal");
        }
    })

}
let somepromise = promisifiedfunc();
somepromise.then(function(x){
  console.log(x);
})
somepromise.catch(function(err){
    console.log(err);
})


