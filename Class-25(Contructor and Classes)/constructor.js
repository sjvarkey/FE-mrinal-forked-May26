// pizza constructor

function Pizza(toppingsPara , sizePara , crustTypePara){
    // this - {} - the new keyword 
    // initializes the this keyword to an empty object
  this.toppings = toppingsPara
  this.size = sizePara
  this.crustType = crustTypePara

}


// new keyword

let order1 =  new Pizza(['cheese', 'pepperoni'] , 'medium' , 'thin')
let order2=  new Pizza(['tomatoes', 'Onion'] , 'large' , 'thick')
console.log(order1)
console.log(order2)

