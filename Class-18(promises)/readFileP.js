const fileSystem = require("fs");

// fileSystem.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("this is file data " + data);
//   }
// });

// file operations with Promises

let readFilePromise1 = fileSystem.promises.readFile("f1.txt");

// then and catch

readFilePromise1
  .then(function (data) {
    console.log("This is file Data -> " + data);
  })
  .catch(function (err) {
    console.error(err);
  });
