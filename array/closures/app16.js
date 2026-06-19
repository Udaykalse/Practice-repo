function sortByKey(key) {
  return function (arr) {
    return arr.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    });
  };
}
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const sortByAge = sortByKey("age");
console.log(sortByAge(users));
