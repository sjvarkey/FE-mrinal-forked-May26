function Car(modelPara, yearPara, colorPara) {
  this.model = modelPara;
  this.year = yearPara;
  this.color = colorPara;


}

Car.prototype.displayInfo = function () {
  console.log(`This is a ${this.color} `);
};

// Car.prototype.__proto__.displayInfo = function () {
//   console.log(`This is a ${this.color}  ${this.year} ${this.model} `);
// };

let car1 = new Car("Toyota Camry", 2020, "White");
console.log(car1);
car1.displayInfo()
// let car2 = new Car("Lexus", 2021, "Black");
// console.log(car2);

// let car3 = new Car("BMW x6", 2022, "Red");
// console.log(car3);

// car1.displayInfo()
// car2.displayInfo()
// car3.displayInfo()
// car1.displayInfo()

let iceCream = {
  name : 'Baskin Robbins',
  flavour : 'Vanilla',
   price : '100rs'
};

 console.log(iceCream);

  iceCream.displayInfo()
