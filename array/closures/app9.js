function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const c = counter();
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
