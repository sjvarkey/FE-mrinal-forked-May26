function fetchFromOpenWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("No Data"), 1000)
  );
}

function fetchFromWeatherAPI() {
  return new Promise((resolve , reject) =>
    setTimeout(() => reject("rjected with no data"), 700)
  );
}

function fetchFromAccuWeather() {
  return new Promise((resolve , reject) =>
    setTimeout(() => reject("No Data"), 1200)
  );
}

// Promise.race([
//   fetchFromOpenWeather(),
//   fetchFromWeatherAPI(),
//   fetchFromAccuWeather(),
// ]).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.error(err)
// });


Promise.any([
  fetchFromOpenWeather(),
  fetchFromWeatherAPI(),
  fetchFromAccuWeather(),
]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.error(err)
});
