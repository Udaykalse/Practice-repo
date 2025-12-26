let user = { name: "Parvej", age: 24 };

let copy = { ...user };

copy.age = 23;

console.log(user.age);
console.log(user);
