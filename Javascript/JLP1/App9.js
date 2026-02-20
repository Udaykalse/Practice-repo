const obj1 = {
  val: 100,
};
const obj2 = {
  val: 200,
};

function showVal(prefix) {
  return prefix + this.val;
}

console.log(showVal.apply(obj2, ["Value : "]));
