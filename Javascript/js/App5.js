let ages = [22, 19, 25, 30];

let allAdults = true;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    allAdults = false;
    break;
  }
}

console.log(allAdults);

let adults = ages.every((age) => age >= 20);
console.log(adults);
