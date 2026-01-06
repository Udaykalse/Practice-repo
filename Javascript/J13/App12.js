const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const processMax = (data) => console.log("Max :- ", findMax(data));
processMax([10, 5, 2, 90]);
