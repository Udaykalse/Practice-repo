var scores = {
  A: 99,
  B: 79,
  C: 29,
};

var maxKey = "";
var maxVal = 0;

for (var key in scores) {
  if (scores[key] > maxVal) {
    maxVal = scores[key];
    maxKey = key;
  }
}

console.log(maxKey)
