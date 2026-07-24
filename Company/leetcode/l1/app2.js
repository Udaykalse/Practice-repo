function removeNegative(nums) {
    return nums.filter(num => num >= 0);
}
console.log(removeNegative([-1,5,-3,2,7]))