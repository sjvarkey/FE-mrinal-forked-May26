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

let zoo2 = {...zoo1} // Shallow Copy
zoo2.name = 'Brazil Zoo'
zoo2.location = 'Brazil'
zoo2.animals[2].species='Zebra'
zoo2.animals[2].food='Grass and Leaves'


console.log("This is Zoo1 -> " , zoo1)
console.log("This is Zoo2 -> " , zoo2)





