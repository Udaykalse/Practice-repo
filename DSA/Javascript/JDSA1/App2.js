let nums = [2, 11, 7, 15];
let target = 9;

for (let i = 0; i < nums.length; i++) {
  let remainig = target - nums[i];
  let indx = nums.indexOf(remainig);

  if (indx !== -1 && indx !== i) {
    console.log([i, indx]);
    break;
  }
}
