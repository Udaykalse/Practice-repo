let a = [1, 2, 3, 4, 5, 6];
var left = 0,
  right = 5;
var found = false;
var target = 5;
while (left <= right) {
  var mid = Math.floor((left + right) / 2);
  if (a[mid] == target) {
    // 2
    found = true;
    break;
  } else if (a[mid] < target) {
    left = mid + 1; // 3
  } else {
    right = mid - 1; // 1
  }
}

if (found) {
  console.log("Yes");
} else {
  console.log("No");
}
