var user = {
  name: "Parvej",
  age: 25,
  city: "Pune",
};

var { age, ...restDetails } = user;

for (var key in restDetails) {
  console.log(key + " : " + restDetails[key]);
}
