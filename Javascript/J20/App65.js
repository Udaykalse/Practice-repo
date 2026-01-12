function checkDis(yr) {
  var result = [];
  for (var i = 0; i < yr.length; i++) {
    result.push(yr[i] > 2);
  }
  return result;
}

console.log(checkDis([1, 3, 5, 2]));

const checkDis1 = (yer) => yer.map((y) => y > 2);

console.log(checkDis1([1, 3, 5, 2, 0, 1, 5, 7]));
