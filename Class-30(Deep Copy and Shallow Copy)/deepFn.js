let zoo1 = {
  name: "Amazing Zoo",
  location: "Melbourne",

  animals: [
    {
      species: "Lion",
      food: "Meat",
    },

    {
      species: "Panda",
      food: "Leaves and Fruits",
    },

    {
      species: "Bear",
      food: "Fruits and Honey",
    },
  ],
};

let dataArray = [1, (2)[(3, 4, ["adam", "john"])], 5, 6];

function deepClone(value) {
  if (typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    let arr = [];
    for (let i = 0; i < value.length; i++) {
      arr[i] = deepClone(value[i]);
    }
    return arr;
  }

  // Object
  let obj = {};

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      obj[key] = deepClone(value[key]);
    }
  }
  return obj;
}


let clonedObj = deepClone(zoo1)



clonedObj.name = 'Brazil'
clonedObj.animals[1].species = 'Girrafe'
console.log(zoo1)
console.log(clonedObj)


let obj = {
    name : 'John',
    age : 27
}

let has = obj.hasOwnProperty('phone')
console.log(has)
