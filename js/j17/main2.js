const arr = [12, 45, 2, 67, 34];

let laregest = -Infinity;
let second_Laregst = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > laregest) {
    second_Laregst = laregest;
    laregest = arr[i];
  }else if(arr[i]>second_Laregst && arr[i] !==laregest){
    second_Laregst=arr[i]
  }
}


console.log("Second Largest :- ", second_Laregst)