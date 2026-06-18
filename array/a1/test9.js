const person = {
  name: "Gojo",
};
function show(city) {
  console.log(this.name, city);
}
show.call(person, ["Murud"]);
