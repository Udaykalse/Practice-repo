const getCount = (arr) => {
  let count = { even: 0, odd: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count.even++;
    else count.odd++;
  }
  return count;
};

console.log(getCount([1, 2, 3, 4, 5, 6, 7]));
