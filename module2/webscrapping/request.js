const request = require("request");
request("http://www.google.com",cb);

function cb(error,response,body){
  if (error){
    console.error('error:', error);
  }
   
else{
  console.error('body:', body);
}  
};