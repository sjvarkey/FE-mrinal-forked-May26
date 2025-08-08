// pizza constructor

function Pizza(toppingsPara, sizePara, crustTypePara) {
  // this - {} - the new keyword
  // initializes the this keyword to an empty object
  this.toppings = toppingsPara;
  this.size = sizePara;
  this.crustType = crustTypePara;

  this.describe = function () {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust.`
    );
  };
}

// new keyword

let order1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
let order2 = new Pizza(["tomatoes", "Onion"], "large" , 'thick');
let order3 = new Pizza(["Bell peppers", "Zuccini"], "small" , 'thin');


console.log(order1)
console.log(order2)
console.log(order3)