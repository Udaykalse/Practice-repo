const nums = [1, 2, 3, 4, 5, 6];

const result = nums.reduce(
  (acc, n) => {
    if (n % 2 === 0) acc.even.push(n);
    else acc.odd.push(n);
    return acc;
  },
  { even: [], odd: [] },
);
console.log(result)