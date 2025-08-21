function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

function fetchUserPosts(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0; // 50% chance of failure
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

// Polyfill for Promise.all

Promise.myAll = function (subPromisesArr) {
  const promise = new Promise(function (resolve, reject) {
    const result = []; 
    let total = 0;

    subPromisesArr.forEach((subPromise , index) => {
      Promise.resolve(subPromise)
        .then((res) => {
          result[index] = res
          total++;

          if (total === subPromisesArr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });

  return promise;
};

Promise.myAll([fetchUserData(), fetchUserPosts(), fetchUserComments()])
  .then((results) => {
    console.log(results);
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });
