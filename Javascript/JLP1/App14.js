const user = { name: "Basuvraj" };
function intro(city) {
  return `${this.name} lives in ${city}`;
}

console.log(intro.call(user, "Pune"));
