let arr = [2, 4, 5, 61, 1, 0];
let largest = Math.max(...arr)
let newArr = arr.filter((num)=>num !== largest)
let secondLargest = Math.max(...newArr)
console.log(secondLargest)