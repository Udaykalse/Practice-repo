function compose(...fns) {
  return function (x) {
    return fns.reduceRight((a, fn) => fn(a), x);
  };
}

// console.log(comp(x => x+1, x => x*2, x => x-3)(10))
const result = compose(
  x => x + 1,
  x => x * 2,
  x => x - 3
)(10);

console.log(result)