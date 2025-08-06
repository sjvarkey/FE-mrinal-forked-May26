// 1. this in global 

// console.log(this)

// 2nd 
// function test(){
//     console.log(this) // window
// }

// test()

// 3rd - fn inside an obj

let obj = {
    name :'Adam',
    age : 25,

    fn: function(){
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

// let obj3 = {
//     name : 'Steve',
//     address : {
//      city : 'Mumbai',
//      fn : function(){
//         console.log(this)
//      }
//     }
// }

// obj3.address.fn()

