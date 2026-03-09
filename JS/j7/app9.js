const words = ["js", "basavaraj", "Javascript"];

const long = words.reduce((a, b) => (a.length > b.length ? a : b));
console.log(long)
