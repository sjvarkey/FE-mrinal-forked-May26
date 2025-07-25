const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("This is resolved data");
  }, 5000);
});

function resolvePromise() {
  p1.then((res) => {
    console.log(res);
  });

  console.log("Scaler");
}

 async function handlePromise(){
   let data = await p1
   console.log(data)
}

// resolvePromise();
handlePromise()
