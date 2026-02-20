function createCounter(start) {
  let count = start;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
