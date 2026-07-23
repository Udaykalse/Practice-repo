let str = "Udaysinh@2212";
// let numStr = Number(str);
let nums = [];
for (let i = 0; i <= str.length - 1; i++) {
  if (!isNaN(str[i]) && str[i] !== " ") {
    // nums += nums.str[i];/
    nums.push(Number(str[i]));
  }
}
console.log(nums);
