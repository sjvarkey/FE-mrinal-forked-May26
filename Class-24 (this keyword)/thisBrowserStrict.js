'use strict'

console.log(this) // window


function test(){
    console.log(this)
}



test()

//3
let obj = {
    name :'Adam',
    age : 25,

    fn: function(){
        console.log(this)
    }
}

obj.fn()


var obj2 = {
    name: "Adam",
    age: 26,
  
    fn: function () {
        let nestedFn = function(){
          console.log(this)
        }
        return nestedFn
    },
  };
  
  let fn2 = obj2.fn(); // nestedFn
  
  console.log(fn2);
  
  fn2();