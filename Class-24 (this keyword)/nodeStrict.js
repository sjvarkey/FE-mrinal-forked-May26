'use strict'

// 1. global output

// console.log(this)

// 2. function 

// function test(){
//     console.log(this)
// }

// test()


// 3 . fn inside an object

let obj= {
    name :'Adam',
    fn : function(){
     console.log(this)
    }
}

obj.fn()

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
  
  fn2();


