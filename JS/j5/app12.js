let users = [
  { name: "John", age: 16 },
  { name: "Sam", age: 21 },
  { name: "Alex", age: 25 },
];

let user = users.filter((user) => user.age > 18);
console.log(user);
