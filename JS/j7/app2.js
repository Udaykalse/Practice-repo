var obj = {
  name: "Basavraj",
  age: 27,
};

console.log(Object.keys(obj));

console.log("-----------------------------------------");

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car.type);
