const obj1 = { name: "Basuraj" };
const obj2 = { name: "Cheten" };
function show() {
  console.log(this.name);
}
show.call(obj1);
show.call(obj2);

