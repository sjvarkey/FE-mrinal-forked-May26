// function checkThis() {
//    "use strict";
//     console.log(this);
 
//   }
  
//   checkThis();


// const user = {
//     name: "Alice",
//     greet: function () {
//       setTimeout(function () {
//         console.log(this.name);
//       }, 1000);
//     }
//   };
  
//   user.greet();

// 4
  const counter = {
    count: 0,
  start: function () {
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
  };

  counter.start()