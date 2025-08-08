// 1. this in global

// console.log(this) // empty object

// 2. this in function

function test() {
  // console.log(this) // global object
}

test();

// 3. This inside an Object

var obj = {
    name : 'Adam',
    age : 26,
    fn: function(){
        console.log(this.name)
    }
}

 obj.fn() // object itslef


// 4th 
var obj2 = {
  name: "Adam",
  age: 26,

  fn: function () {
      let nestedFn = function(){
        console.log(this.name)
      }
      return nestedFn
  },
};

let fn2 = obj2.fn(); // nestedFn

console.log(fn2);

fn2(); // global object
