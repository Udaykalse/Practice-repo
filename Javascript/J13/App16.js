const sumNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") sum += arr[i];
  }
  return sum;
};

const runSum = (data) =>
  console.log(`Sum of Only Number in arr :- ${sumNumber(data)}`);

runSum([10, "apple", "1", 20, true]);
