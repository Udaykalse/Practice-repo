function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) { // 10 > - 1  1st 10 //2 10 >5 // 
      second = max; 
      max = num;
    } else if (num > second && num !== max) { //2 :- 5 > 10 5 X 10  
      second = num; 
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 8, 20, 3]));