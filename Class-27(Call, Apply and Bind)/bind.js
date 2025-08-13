// Bind method

let person1 = {
  name: "Mark",
  age: 26,
  greet: function () {
    console.log(` I'm ${this.name}`);
  },
};

let person2 = {
  name: "John",
  age: 26,
};

let boundGreet = person1.greet.bind(person2);

// boundGreet()

let btn = document.querySelector("#print");

btn.addEventListener("click", boundGreet);
