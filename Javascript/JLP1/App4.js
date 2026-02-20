function createCounter(start) {
  let count = start;
  return function () {
    count = count + 1;
    return count;
  };
}
const counter = createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
