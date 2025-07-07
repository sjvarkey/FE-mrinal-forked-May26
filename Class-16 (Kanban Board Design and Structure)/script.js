// Modal Pop up and Modal pop Down

const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector('.main-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')

console.log(allPriorityColors)

// Flags
let addBtnFlag = false;
let modalPriorityColor = 'lightpink'

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag === true) {
    // Open the Modal
    modalCont.style.display = "flex";
  } else {
    // close the Modal
    modalCont.style.display = "none";
  }
});

// Modal Event to get the task and createTicket

modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    let id = shortid()
    console.log(id)
    let task = taskArea.value;

    createTicket(task , id , modalPriorityColor)
    taskArea.value = "";
    modalCont.style.display='none'
    addBtnFlag = false
   
  }
});

// Create Ticket Function
function createTicket(ticketTask , ticketID , ticketColor) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};" ></div>
             <div class="ticket-id">${ticketID}</div>
             <div class="task-area">${ticketTask}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>
    `;

    mainCont.appendChild(ticketCont)
}

// moving the active class on priority color boxes

allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click' , function(){
       allPriorityColors.forEach(function(priorityColor){
        priorityColor.classList.remove('active')
       })

     colorElem.classList.add('active')
     modalPriorityColor = colorElem.classList[0]
    })
})
