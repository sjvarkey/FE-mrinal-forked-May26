'use strict';
// function greet(g1, g2) {
//   console.log(`${this.name} says ${g1} and ${g2}`);

// }

// const person = { name: 'Alice' };
// greet.call(person, 'Hi', 'Bye'); // Alice says Hi and Bye
// greet.call(null, 'Hello', 'World'); // 




//2
// 'use strict';
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum.apply(null, [1, 2, 3])); // 
// console.log(sum.apply({ a: 10 }, [4, 5, 6])); // 


//3 

'use strict';
function add(y) {
  return this.x + y;
}

const obj = { x: 5 };
const boundAdd = add.bind(obj);
console.log(boundAdd(10)); // 15

const rebound = boundAdd.bind({ x: 100 }); // rebounidng is not possible
console.log(rebound(1)); //