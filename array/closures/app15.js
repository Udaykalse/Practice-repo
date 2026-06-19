const arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function () {
    console.log(i);
  });
}
arr[0]();
arr[1]();
arr[2]();
