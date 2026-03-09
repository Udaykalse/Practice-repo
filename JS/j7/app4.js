const fruits = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits.reduce((acc, fruits) => {
  acc[fruits] = (acc[fruits] || 0) + 1;
  return acc
},{});

console.log(count)
