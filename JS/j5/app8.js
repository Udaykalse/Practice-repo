const users = [
  { name: "A", age: 15 },
  { name: "B", age: 22 },
  { name: "C", age: 19 },
];

const adults = users.filter((userAge) => userAge.age > 18);
console.log(adults)
