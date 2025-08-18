// polyfill of Reduce
// Starting at 10:50

// 1.this method works with an array
// 2. this returns a single value
// 3 . this needs an accumulator
// 4. For loop to iterate over array values

// 5 . if accumulator is not initizled

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(sum);

// Polyfill fof Reduce

Array.prototype.myReduce = function (cb, initialValue) {
  if (this == null || this == undefined) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  if (Array.isArray(this) === true) {
    let accumulator;
    let firstIndex;

    if (arguments.length === 1) {
      accumulator = this[0];
      firstIndex = 1;
    } else {
      (accumulator = initialValue), (firstIndex = 0);
    }

    for (let i = firstIndex; i < this.length; i++) {
      accumulator = cb(accumulator, this[i]);
    }

    return accumulator;
  }
};

let nums2 = [1, 3, 4, 5];

let sum2 = nums2.myReduce(function (acc, currValue) {
  acc = acc + currValue;
  return acc;
}, 1);
console.log(sum2);
