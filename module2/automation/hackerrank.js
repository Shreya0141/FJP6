const puppeteer = require("puppeteer");
const mail = "janato7768@aikusy.com";
const password = "shreya";
const code = require('./code');

let browserpromise = puppeteer.launch({headless:false,defaultViewport: null});
let page;

browserpromise.then(function(browser){
    console.log("Browser is opened");
    let pagepromise = browser.newPage();
    return pagepromise;
}).then(function(pageinstance){
    console.log("Page is opened");
    page = pageinstance;
    let urlpromise = page.goto('https://www.hackerrank.com/');
    return urlpromise;
}).then (function(){
    return waitForSelector("ul.menu a");
}).then(function(){
    let waitpromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitpromise;
}).then(function(){
    let domClickPromise = page.evaluate(function(){
        let btn = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btn[1].click();
        return;
    });
    return domClickPromise;
}).then(function(){
    let waitpromise = page.waitForSelector("#input-1");
    return waitpromise; 
}).then (function(){
    let typemailpromise =page.waitForSelector("#input-1",mail,{delay : 100});
    return typemailpromise;
}).then (function(){
    let passtypepromise = page.type("#input-2",password,{delay : 100});
    return passtypepromise;
}).then(function(){
    let clickPromise = page.click('button[data-analytics="LoginPassword"]');
    return clickPromise;
}).then (function(){
    return waitForSelector('[data-automation="algorithms"]');
}).then (function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickPromise = div.querySelector(".ui-checklist-list-item input");
        clickPromise.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup selected");
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function(){
    let arrPromise = page.evaluate(function(){
        let arr = [];
        let aTags = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i = 0;i < aTags.length;i++){
           let link =  aTags[i].href;
           console.log(link);
           arr.push(link);
        }return arr;
    })
    return arrPromise;
}).then (function(questionarr){
    let questionpromise = questionSolver(questionarr[0],code.answers[0]);
    for(let i = 1 ; i <questionarr.length;i++){
        questionpromise = questionpromise.then(function(){
            let newQuestionpromise = questionSolver(questionarr[i],code.answers[i]);
            return newQuestionpromise;
        })
    }
    return questionpromise;
}).then(function(){
    console.log("All warmup questions have been submitted");
})





function waitForSelector(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickpromise = page.click(selector);
             return clickpromise
        }).then (function(){
            resolve();
        });
    })
}

function questionSolver(question,answer){
    return new Promise(function(resolve,reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            return waitForSelector(".checkBoxWrapper input");
        }).then (function(){
            return waitForSelector(".ui-tooltip-wrapper textarea");
        }).then(function(){
            console.log("on the text area");
            let typepromise = page.type(".ui-tooltip-wrapper textarea",answer);
            return typepromise;
        }).then (function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then (function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then (function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then (function(){
            let upControl = page.keyboard.up('Control');
            return upControl;
        }).then(function(){
           return waitForSelector(".monaco-editor.no-user-select.vs");
        }).then(function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then (function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then (function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then (function(){
            let upControl = page.keyboard.up('Control');
            return upControl;
        }).then (function(){
            return waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        }).then(function(){
            console.log("submitted successfully");
            resolve();
        })
    })

}