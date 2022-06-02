let addbtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let colors = ["lightpink","blue","green","black"];
let removemodal = false;
let addmodal = true;
let modalPriorityColor = colors[colors.length-1];

let ticketArr = [];

addbtn.addEventListener("click",function(){
    if(addmodal){
     modalCont.style.display = "flex";
    }else{
    modalCont.style.display = "none";
}
addmodal = !addmodal;
})

for(let i = 0 ; i <allPriorityColors.length;i++){
    let priorityDivOnecolor = allPriorityColors[i];
    priorityDivOnecolor.addEventListener("click",function(){
        for(let j = 0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove("active");
        }
        priorityDivOnecolor.classList.add("active");
        modalPriorityColor = priorityDivOnecolor.classList[0];
    })
}

modalCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == 'Enter'){
        createTicket(modalPriorityColor,taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.stye.display = "none";
        addmodal = !addmodal;
    }
})

removeBtn.addEventListener("click",function(){
    if(removemodal){
        removeBtn.style.color = "black";
    }
    else{
        removeBtn.style.color = "red";
    }
    removemodal = !removemodal;
})

function createTicket(ticketColor,task){
    // <div class="ticket-cont">
            // <div class="ticket-color"></div>
            // <div class="ticketid">1234</div>
            // <div class="taskarea">hello world</div>
    //     </div>
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML = ` <div class="ticket-color ${ticketColor}"></div>
                             <div class="ticketid">1234</div>
                             <div class="taskarea">${task}</div>`
    mainCont.appendChild(ticketCont);
    

    //handling remove
    ticketCont.addEventListener("click",function(){
        if(removemodal)
            ticketCont.remove();
        
    })

    //handling color

    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for(let i = 0 ; i <colors.length;i++){
            if(currentTicketColor == colors[i]){
                currentTicketColorIdx = i;
                break;
            }
        }
        let nextColorIdx = (currentTicketColorIdx+1)%colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
    })
}

