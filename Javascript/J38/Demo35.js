const arr = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
const truthy = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        truthy[truthy.length] = arr[i];
    }
}

console.log("Truthy:", truthy); // Output: [1, 2, 3, 4]