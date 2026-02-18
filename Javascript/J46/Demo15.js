let arr = [1, "1", "abc", null, 2, 0.5, -1, undefined, 2];

let good = arr.filter(Number.isFinite);
let bad = arr.filter((x) => !Number.isFinite(x));

console.log("Good :- ", good ," : ", "Bad :- ",bad)