let user = { name: "Sidharth", age: 24, city: "Pune" };

let { name, ...others } = user;

console.log(name);
console.log(others);
