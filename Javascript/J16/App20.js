let Obj1 = {
  name: "Uday",
  address: {
    city: "Latur",
  },
};

let shallowCopy = { ...Obj1 };
shallowCopy.address.city = "Mumbai";

console.log(Obj1.address.city);

let deepCopy = JSON.parse(JSON.stringify(Obj1));
deepCopy.address.city = "Mumbai";
console.log(Obj1.address.city);
