let carPrototype = {
    displayInfo : function(){
        return `This is a ${this.year} ${this.model}`
    }, 
}
let personPrototype= {
     displayInfo : function(){
        return `I am  ${this.name} and I am  ${this.age} years old`
    }, 
}




let car1 = Object.create(carPrototype)
car1.model = 'Toyota'
car1.year = 2021

console.log(car1)

let person1 = Object.create(personPrototype)
person1.name = 'Adam'
person1.age = 27
console.log(person1)

console.log(person1.displayInfo())

