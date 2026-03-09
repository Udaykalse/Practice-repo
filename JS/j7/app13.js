const user = { name: "Uday", age: 24 };
const copy = {...user};
console.log(copy)
copy.age = 25
console.log(copy)
console.log(user)
