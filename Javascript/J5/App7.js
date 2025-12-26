// let arr = [1, 2, 3];

// console.log(...arr);
var add = [];
function sum(...nums) {
  for (var i = 0; i < nums.length; i++) {
    if (Number(nums[i])) {
      if (nums[i] % 2 === 0) {
        add.push(nums[i]);
      }
    }
  }
}

sum(1, 2, 3, "a", 4, "abc", "5", 5, 6);
console.log(add);
var Sumadd = add.reduce((x, y) => y + x);
console.log(Sumadd);
