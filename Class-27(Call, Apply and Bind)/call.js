let person1 = {
  name: "Adam",
  age: 26,

  printName: function (location, hobby) {
    console.log(`I am ${this.name} I am from ${location} and i like ${hobby}`);
  },

  printAge: function () {
    console.log(`I am ${this.age}`);
  },
};

let person2 = {
  name: "John",
  age: 25,
  
};



 person1.printName('New York' , 'Swimming'); 
// i am Adam- > this-Person1   person1.name

// call method
person1.printName.call(person2, 'Berlin' , 'Soccer');
person1.printAge.call(person2);
// this - person2 - person2.name -> John
// this - person2 - person2.age -> 25
