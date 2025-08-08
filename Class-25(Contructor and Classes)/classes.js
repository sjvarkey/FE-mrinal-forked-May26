class Pizza {
  constructor(toppingsPara, sizePara, crustTypePara) {
    this.toppings = toppingsPara;
    this.size = sizePara;
    this.crustType = crustTypePara;
  }

  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust.`
    );
  }
}

let order1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
let order2 = new Pizza(["cheese", "Onion"], "large", "thick");
let order3 = new Pizza(["Bell peppers", "Zuccini"], "small" , 'thin');

console.log(order1)
console.log(order2)
console.log(order3)

order1.describe()