const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-chennai-super-kings-qualifier-1-1254114/full-scorecard";


request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document; 
        let batsman = document.querySelectorAll(".batsman-cell.text-truncate.out a");
        for(let i = 0;i<batsman.length;i++){
            let batsmanlink = batsman[i].href;
            let completelink = "https://www.espncricinfo.com/"+batsmanlink;
            // console.log(completelink);
            request(completelink,cb2);
        }


    }

}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }

    else{
        const dom = new JSDOM(html);
        const document = dom.window.document; 
        let playerdetails = document.querySelector(".player-card-padding .player_overview-grid");
        let playerh5 = playerdetails.querySelectorAll("div h5");
        let fullname = playerh5[0].textContent;
        let DOB = playerh5[1].textContent;
        console.log("Name of player----->",fullname,"Date Of Birth---->",DOB);
    }
}