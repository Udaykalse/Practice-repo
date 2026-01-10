const arr = [1, 2, 2, 3, 3, 4, 5];
const unique_arr = [...new Set(arr)];
console.log(unique_arr);
console.log("------------------");
const count = (arr) =>
  arr.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return c;
  }, []);
console.log(count(arr));
