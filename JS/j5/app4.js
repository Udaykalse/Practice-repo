let nums = [1, 2, 10, 15, 20, 25, 3];
let evens = nums.filter((num) => num % 2 === 0);
let odds = nums.filter((num) => num % 2 === 1);
let res = nums.filter((num) => num > 15);


console.log(evens , " " , " : " , odds , " ", " : ", res );

