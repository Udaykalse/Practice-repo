const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};

const processSum = (data) => console.log("Sum :- ", sumArray(data));

processSum([1,2,3,4,5])
