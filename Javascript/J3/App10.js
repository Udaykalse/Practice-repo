var scores = {
  A: 45,
  B: 88,
  C: 90,
};

var maxKey = "";
var maxValue = 0;

for (var key in scores) {
  if (scores[key] > maxValue) {
    maxValue = scores[key];
    maxKey = key;
  }
}
console.log(maxKey);
