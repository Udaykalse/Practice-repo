let arr = [1, undefined, "3", null, 5];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if(typeof arr[i] === 'number'){
    rev.push(arr[i]);
  }
}
console.log(rev);
