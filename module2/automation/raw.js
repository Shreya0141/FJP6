const puppeteer = require("puppeteer");

let browserpromise = puppeteer.launch({headless:false});

browserpromise.then(function(browser){
    console.log("Browser is opened");
    let newpagepromise = browser.newPage();
    return newpagepromise;

}).then(function(page){
    console.log("New page is opened");
    let urlpromise = page.goto('https://www.google.com/');
    return urlpromise;
}).then(function(){
    console.log("Google is opened");
}) 
