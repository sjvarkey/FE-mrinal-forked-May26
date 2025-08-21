// Polyfill Promise.any

Promise.myAny = function (subPromises) {
  const promise = new Promise(function (resolve, reject) {
    if (subPromises.length === 0)
      reject(new AggregateError("No promises were provided."));

    let rejections = [];
    let rejectedCount = 0;

    subPromises.forEach((subPromise, index) => {
      Promise.resolve(subPromise)
        .then(resolve) // resolve the promise immediately
        .catch((err) => {
          rejections[index] = err;
          rejectedCount++;
          if (rejectedCount == subPromises.length) {
            reject(
              new AggregateError(rejections, "All promises were rejected.")
            );
          }
        });
    });
  });
  return promise
};
