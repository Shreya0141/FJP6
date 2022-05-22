const fs = require("fs");
const request = require("request");
const jsdom = require("jsdom");
const xlsx = require("json-as-xlsx");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let count = 0 ;
request(link,cb);

function cb(error,response,html){
  if (error){
    console.error('error:', error);
  }
   
else{
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let allScorecardtags = document.querySelectorAll('.ds-border-b.ds-border-line');
    //console.log(allScorecardtags.length);
    for(let i = 0; i<60;i++){
        let anchortagAll = allScorecardtags[i].querySelectorAll("a");

         let scorecardlink = anchortagAll[2].href;
         let completelink = "https://www.espncricinfo.com"+scorecardlink;
           //console.log(completelink);
         request (completelink,cb2);
         count++;
    }
}  
};
function cb2(error,response,html){
    if(error){
        console.log(error);
    }
else{
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let batsmanRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
    for(let i = 0;i<batsmanRow.length;i++){
        let cells = batsmanRow[i].querySelectorAll('td');
        if(cells.length==8){
            let names = cells[0].textContent;
            let runs = cells[2].textContent;
            let balls = cells[3].textContent;
            let fours = cells[5].textContent;
            let sixes = cells[6].textContent;
            // console.log("Name : ",names,"Runs : ",runs,"Balls : ",ballss,"Fours : ",fours,"Sixes : ",sixes)
            processplayer(names,runs,balls,fours,sixes);
        }
    }

    count--;
    if(count == 0 ){
        // console.log(leaderboard);
        let data = JSON.stringify(leaderboard);
        fs.writeFileSync('BatsmanStats.json',data);
        let dataExcel = [
            {
              sheet: "IPL STATS",
              columns: [
                { label: "Names", value: "Name" }, // Top level data
                { label: "Innings", value: "Innings" },
                { label: "Runs", value: " Runs" }, // Custom format
                { label: "Balls", value: "Balls" },
                { label: "Fours", value: "Fours" },
                { label: "Sixes", value: "Sixes" }
              ],
              content: leaderboard
            },
            
            
          ]
          
          
          
          let settings = {
            fileName: "BatsmanDetail", // Name of the resulting spreadsheet
            extraLength: 3, // A bigger number means that columns will be wider
            writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
          }
          
          xlsx(dataExcel, settings)
    }

}
}





function processplayer(names,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i = 0; i < leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Names == names){
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;


        }
    }
    let obj = {
        Name:names,
        Innings: 1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);


}



