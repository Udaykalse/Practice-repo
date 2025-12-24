var user = {
  name: "Siddharth",
  age: 25,
  city: "Pune",
};

for (var key in user) {
  if (key === "age") {
    delete user[key];
  }
}

console.log(user)