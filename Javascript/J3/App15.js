var user = {
  name: "Uday",
  age: 24,
  role: "Frontend Developer",
};

for (var key in user) {
  console.log(key + " : ", +user[key]);
}
