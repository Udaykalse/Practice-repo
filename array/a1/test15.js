const person = {
  name: "Aman",
};
function greet() {
  console.log(this.name);
}
const fn = greet.bind(person);
fn();
