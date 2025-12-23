var employee = {
  name: "Ravi",
  dept: "IT",
};

var exists = false;

for (var key in employee) {
  if (key === "dept") {
    exists = true;
  }
}

console.log(exists);
