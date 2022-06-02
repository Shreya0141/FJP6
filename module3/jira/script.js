let addbtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let addmodal = true;
let modalPriorityColor = 'black';

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
}