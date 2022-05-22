const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-chennai-super-kings-qualifier-1-1254114/full-scorecard";

request(link,cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document; 
        let bowlersTable = document.querySelectorAll(".table.bowler");
        let highestwicket = 0;
        let nameOfWicketTaker = "";
         for(let i = 0;i<bowlersTable.length;i++){
             let rows = bowlersTable[i].querySelectorAll("tbody tr");
            for(let j = 0; j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length > 1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // console.log("Name of bowler---->",name,"Wicket taken---->",wicket);
                    if(wicket > highestwicket){
                        highestwicket = wicket;
                        nameOfWicketTaker = name;
                    }

                } 
            }
         }console.log("Name of most wicket taken", nameOfWicketTaker);
         console.log("Number of wickets",highestwicket);

        }
        
    }
