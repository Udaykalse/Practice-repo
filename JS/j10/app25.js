let num = 12121;
let numsStr = num.toString();
let revNumber = "";
for (let i = numsStr.length - 1; i >= 0; i--) {
  revNumber += numsStr[i];
}

let reversedNumber = Number(revNumber);
console.log(num === reversedNumber)
