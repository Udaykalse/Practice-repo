function intero(age, city) {
  console.log(this.name, age, city);
}
let user = { name: "Basuraj" };
intero.apply(user, [22, "KA"]);
