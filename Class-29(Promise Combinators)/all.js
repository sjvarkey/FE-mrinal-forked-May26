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

// fetchUserData().then((data)=>{
//     console.log(data)
//     return fetchUserPosts()
// }).then((posts)=>{
//     console.log(posts)
// }).catch((err)=>{
//     console.log(err)
// })

// Promise Combinators

// Promise.all. ['result1' , 'result2' ]

Promise.all([fetchUserData(), fetchUserPosts()])
  .then(function (results) {
    console.log(results);
    console.log(results[0]);
    console.log(results[1]);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
