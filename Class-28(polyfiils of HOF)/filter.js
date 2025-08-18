// Polyfill for Filter Method

//1. Works with an Array
//2. This iterates over an array
//3.This takes a callback
//4. This returns a new Array without modifying the orginal one
//5.take care of the boolean condition
//6. if true you add the element in array if false you discard the element

 let nums = [1 ,4 ,5 ,6 ,7,9, 2]

let evenArr = nums.filter(function(num){
    return num%2!=0
})

console.log(evenArr)

Array.prototype.myFilter = function (callback) {
  if (this == null || this == undefined) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (Array.isArray(this) === true) {
    let resultantArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        resultantArray.push(this[i]);
      }
    }

    return resultantArray;
  }
};

let nums2 = [1, 5, 6, 7, 8, 10, 13];

let ourEvenNums = nums2.myFilter(function (num) {
  return num < 5;
});

console.log(ourEvenNums);
