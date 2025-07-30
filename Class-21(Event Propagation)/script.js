// Get All Stars

let stars = document.querySelectorAll('.star')
let ratingDisplay = document.querySelector('#rating')

stars.forEach(function(star){
    star.addEventListener('click' , function(){
     let value = parseInt(star.getAttribute('data-value')) 
     updateRating(value) // 3
    })
})

// Function to update the rating display and filled stars

function updateRating(value){
  stars.forEach(function(star){
    const starValue = parseInt(star.getAttribute('data-value')) // 1
    star.classList.toggle('filled' ,starValue<=value )
  })

  ratingDisplay.innerText = value
}
