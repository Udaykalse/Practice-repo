const a = "listen";
const b = "silent";

const res = a.split("").sort().join("") === b.split("").sort().join("");
console.log(res);
