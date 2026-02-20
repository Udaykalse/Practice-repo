function createCounter(start) {
  let count = start;
  function increment() {
    count = count + 1;
    return count;
  }
  return increment;
}
const counter = createCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
