//require express
const express = require("express");

// app signifies->your server
const app = express();

//get krna hai data from sayhello
app.get("/sayhello",function(req,res){
    res.send("Hello from server");
})

app.get("/sayBye",function(req,res){
    res.send("Bye");
})


app.listen(3000,function(){
    console.log("server started at port 3000")
})