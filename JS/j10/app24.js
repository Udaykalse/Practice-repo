let num = 1213;
let numsStr = num.toString();
let revNumber = "";
for (let i = numsStr.length - 1; i >= 0; i--) {
  revNumber += numsStr[i];
}

let reversedNumber = Number(revNumber);
console.log(typeof reversedNumber, reversedNumber)
