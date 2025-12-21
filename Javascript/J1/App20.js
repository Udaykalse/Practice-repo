let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [];

for (let i = 0; i < arr1.length; i++) merged.push(arr1[i]);
for (let i = 0; i < arr1.length; i++) merged.push(arr2[i]);

console.log("Mereged Array1 and Array2 :-", merged);
