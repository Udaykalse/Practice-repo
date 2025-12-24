var user = {
  name: "Parvej",
  age: 24,
};

var updateUser = { ...user, age: 25 };
for (var key in updateUser) {
  console.log(key + " : " + updateUser[key]);
}
