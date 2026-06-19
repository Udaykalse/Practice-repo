function createCounter(initial) {
  return {
    increment: function () {
      return ++initial;
    },
    decrement: function () {
      return --initial;
    },
  };
}

const c = createCounter(5);
console.log(c.increment());
console.log(c.decrement());

console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
