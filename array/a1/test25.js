const arrLikes = {
  0: "A",
  1: "B",
  length: 2,
};

console.log(Array.prototype.join.apply(arrLikes, ["-"]));
