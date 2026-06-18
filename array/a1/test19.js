const user = {
  name: "Omkar",
};
function show(city) {
  console.log(this.name, city);
}
const fn = show.bind(user, "Pune");
fn();
