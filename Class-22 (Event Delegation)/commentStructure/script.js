let commentContainer = document.querySelector(".comment-container");
let replyBtn = document.getElementById("reply");
let card = document.querySelector(".card");
let allcomments = document.querySelector('.all-comments')

function createInputBox() {
  let div = document.createElement("div");

  div.setAttribute("class", "comment-reply-section");

  div.innerHTML = `
     <input type="text" placeholder="Write your Reply" , class="input">
    <button class="btn submit">Submit</button>`;

   return div
}

// add a reply function

function addReply(text) {
  const div = document.createElement("div");

  div.setAttribute("class", "all-comments");

  div.innerHTML = `<div class="card">
    <span class="text">${text}</span>
    <span id="reply" class="reply">Add Reply</span>
</div>`

  return div
 
}

// replyBtn.addEventListener("click", function () {
//   createInputBox();
// });

commentContainer.addEventListener('click' , function(e){
   let replyBtnClicked =  e.target.classList.contains('reply')
   let submitBtnCliked =  e.target.classList.contains('submit')

   let closestCard = e.target.closest('.all-comments')

    if(replyBtnClicked===true){
     closestCard.appendChild(createInputBox())   ;
    }

    if(submitBtnCliked===true){
        let commentClosest = e.target.closest('.comment-reply-section')

        closestCard.appendChild(addReply(commentClosest.children[0].value))
        commentClosest.remove() 
    }

 
})



