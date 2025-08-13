let person1 = {
  name: "Adam",
  age: 26,

  printName: function () {
    console.log(`I am ${this.name}`);
  },

  printAge: function () {
    console.log(`I am ${this.age}`);
  },
};

let person2 = {
  name: "John",
  age: 25,
  
};



// person1.printName(); 
// i am Jhon - > this-Person1   person1.name

// call method
person1.printName.call(person2);
person1.printAge.call(person2);
// this - person2 - person2.name -> John
// this - person2 - person2.age -> 25
