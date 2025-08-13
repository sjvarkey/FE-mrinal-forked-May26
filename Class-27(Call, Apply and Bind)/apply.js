let person1 = {
  name: "Adam",
  age: 26,

  printName: function (location , hobby) {
    console.log(`I am ${this.name} I am from ${location} and I like ${hobby}`);
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
person1.printName.apply(person2 , ['Berlin' , 'Soccer']);
person1.printAge.apply(person2);
// this - person2 - person2.name -> John
// this - person2 - person2.age -> 25

// why array arguments are needed 
//in apply and what good will they do


const numbers = [4 ,5 ,6 ,7 ,8 ,29 , 70]

let greatest = Math.max.apply(null , numbers)
console.log(greatest)

const numbers1 = [4, 5, 6 , 12 ,45 ,67 ,89 ,67];

function sum(a, b, c , d ,e ,f,g,h) {
  return a +b+c+d+e+f+g+h;
}

let finalSum = sum.apply(null ,numbers1)

console.log(finalSum)







