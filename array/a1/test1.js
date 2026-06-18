const person = {
  name: "Uday",
};
function greet() {
  console.log(this.name);
}
greet.call(person);
