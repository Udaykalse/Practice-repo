let person = {
  name: "Parvej",
};

function greet() {
  console.log(this.name);
}
greet.apply({
  name: "Rahul",
});
