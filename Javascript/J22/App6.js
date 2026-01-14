let arr = [10, 5, 20, 8];

let result = arr.reduce(
  (acc, curr) => {
    if (curr > acc.max) {
      acc.second = acc.max;
      acc.max = curr;
    } else if (curr > acc.second && curr !== acc.max) {
      acc.second = curr;
    }
    return acc;
  },
  { max: -Infinity, second: -Infinity }
);

console.log(result.second);
