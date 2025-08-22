// Case 1
// const user = {
//   name: "Alice",
//   greet: ()=> {
//     console.log("Hello, my name is " + this.name);
//   },
// };

//  user.greet(); // Hello , my name is Alice

// Case 2
// const user2 = {
//   name: "John",
//   greet: function () {
//     console.log("Hello, my name is " + this);
//   },
// };

// const greetFn = user2.greet;
// greetFn();



const user3 = {
  name: "Alice",
  hobbies: ["reading", "coding"],
  showHobbies:()=> {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + " likes " + hobby);
    });
  },
};

user3.showHobbies();


