const arr = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];

const truthy = arr.filter(Boolean);
// OR
const truthyExplicit = arr.filter(item => item);

console.log("Truthy:", truthy); // Output: [1, 2, 3, 4]