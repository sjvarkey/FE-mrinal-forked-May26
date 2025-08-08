class Pizza {
  static totalPizza = 0 // static property to keep count

  constructor(toppingsPara, sizePara, crustTypePara) {
    this.toppings = toppingsPara;
    this.size = sizePara;
    this.crustType = crustTypePara;
    Pizza.totalPizza++
  }

  static printTotalPizzas(){
    console.log(`Total Pizza ${Pizza.totalPizza}`)
  } 

  describe() {
    return(
      `A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
        this.crustType
      } crust.`
    );
  }

}

class stuffedCrustPizza extends Pizza {
  constructor(toppingsPara, sizePara, crustTypePara, stuffingPara) {
    super(toppingsPara, sizePara, crustTypePara);
    this.stuffing = stuffingPara;
  }

  describeStuffing() {
    return (`${this.stuffing}`);
  }

  describeStuffedPizza() {
   let desc = super.describe(); // description
    let stuffing = this.describeStuffing(); // stuffing
    console.log(desc + " with Stuffing "+  stuffing)
  }
}

let order1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
let order2 = new Pizza(["cheese", "Onion"], "large", "thick");
let order3 = new Pizza(["Bell peppers", "Zuccini"], "small", "thin");
let order4 = new stuffedCrustPizza(
  ["Bell peppers", "Zuccini"],
  "small",
  "thin",
  "Cheese"
);

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);

order1.describe();
order2.describe();
order3.describe();
// order4.describe()

Pizza.printTotalPizzas()
order1.printTotalPizzas()
