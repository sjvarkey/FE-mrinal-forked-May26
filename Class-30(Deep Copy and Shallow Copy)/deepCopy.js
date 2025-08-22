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

// Json.strinfy and parse

let zooJsonString = JSON.stringify(zoo1)

let zoo2 = JSON.parse(zooJsonString)

zoo2.name = 'Brazil Zoo'
zoo2.location = 'Brazil'
zoo2.animals[2].species='Zebra'
zoo2.animals[2].food='Grass and Leaves'

console.log(zoo1)
console.log(zoo2)

// structredClone



