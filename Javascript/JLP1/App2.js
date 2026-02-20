function creatCounter(st, useMethod) {
  let count = st;
  function inc() {
    if (useMethod) {
      count++;
    } else {
      count = count + 1;
    }
    return count;
  }
  return inc;
}
console.log("---------------------------------");

console.log("without method usage");

const co1 = creatCounter(5, true);
console.log(co1());
console.log("---------------------------------");
console.log("method usage");
const co2 = creatCounter(3, false);
console.log(co2());
