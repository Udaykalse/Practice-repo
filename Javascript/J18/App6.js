const users = [
  { name: "Uday", age: 28 },
  { name: "Raj", age: 22 },
  { name: "Amit", age: 35 },
  { name: "Sam", age: 26 },
];

function soretedByAge(users) {
  const filteredUser = users.filter(function (user) {
    return user.age > 20;
  });
  const sortedUser = filteredUser.sort(function (a, b) {
    return a.age - b.age;
  });
  return sortedUser;
}

console.log(soretedByAge(users));
