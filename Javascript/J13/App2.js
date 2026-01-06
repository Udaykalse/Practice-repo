const reverseArray = (arr) => {
  let revesed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revesed.push(arr[i]);
  }
  return revesed
};

const processRev = (data) => console.log('Revesed Array :- ', reverseArray(data))
processRev([1,2,3,4])
