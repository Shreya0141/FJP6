let obj = {};
console.log (obj);

let objshreya = {
    Name : "Shreya",
    Age : 20 ,
    phone_no : 7217831314 ,
    last_name : "yadav"
};

console.log(objshreya);

let capAmerica = {
    Name: "Steve",
    age: 33,
    friends:["shreya","yadav"],
    address:{
        state: "delhi",
        city: "new delhi"
    },
    isAvenger : false,
    sayhii: function(){
        console.log("capamerica say hii")
    }
}


console.log(capAmerica);

console.log(capAmerica.Name);
console.log(capAmerica.age);

console.log(capAmerica.friends);

console.log(capAmerica.friends[1]);

console.log(capAmerica.address);
console.log(capAmerica.address.city);
console.log(capAmerica.sayhii);
console.log(capAmerica.sayhii());
capAmerica.sayhii();


console.log("object before update : ",capAmerica);
capAmerica.Movies = ["Avengers","civil war","endgame"];
console.log("object after update :" , capAmerica);

delete capAmerica.Movies;
console.log(capAmerica);
console.log(capAmerica);
capAmerica.isAvenger = true;
console.log(capAmerica);

capAmerica.address.state = 'Lucknow' ;
console.log(capAmerica);


console.log(capAmerica.Name);
console.log(capAmerica["Name"]);
console.log(capAmerica['address']['city']);