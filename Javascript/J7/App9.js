function moveZero(arr) {
  let result = arr.filter((x) => x !== 0);
  let zeros = arr.length - result.length;
  return [...result, ...Array(zeros).fill(0)];
}

console.log(moveZero([0,1,0,3,12]));