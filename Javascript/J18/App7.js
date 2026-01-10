function sortByAge(users) {
  const sortedUsersByAge = users.sort(function (a, b) {
      return a.age - b.age;
  });
  return sortedUsersByAge;
}

console.log(
  sortByAge([
    { name: "A", age: 28 },
    { name: "B", age: 22 },
    { name: "C", age: 25 },
  ])
);
