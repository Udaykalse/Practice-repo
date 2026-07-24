function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));

console.log("-------------without method below------------------------");

function reverseArray1(arr1) {
  const result = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    result.push(arr1[i]);
  }

  return result;
}

console.log(reverseArray1([1, 2, 3, 4]));
