function removeNegative(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

console.log(removeNegative([-1,5,-3,2,7]))