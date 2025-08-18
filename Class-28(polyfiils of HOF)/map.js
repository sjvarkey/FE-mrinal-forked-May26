// Polyfill of Map

let nums = [1, 2, 3, 4]; // 4

let obj = {
  name: "John",
};

//  nums.myMap() . this->nums / this.length -> 4
//  nums2.myMap() . this->nums /  this.length -> 6

// let sqredArr = obj.map(function (num) {
//   return num * num * num;
// });

let sqredArr2 = nums.map(function (num) {
  return num * num * num;
});

console.log(sqredArr2)

Array.prototype.myMap = function (callback) {
  if (this == null || this==undefined) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (Array.isArray(this) === true) {
    let resultantArray = []; // created the resulatant Array

    for (let i = 0; i < this.length; i++) {
      resultantArray.push(callback(this[i]));
      // [1 , 4, 9 ,16]
    }

    return resultantArray;
  } else {
    throw new TypeError(this + "is not an Array");
  }
};

let nums2 = [3, 5, 6, 6, 7, 8, 10];

let myMapArraySquared = nums.myMap(function (num) {
  return num + 2;
});

console.log(myMapArraySquared);

let a = function(){
    console.log("hello")
}

console.log(typeof a)
