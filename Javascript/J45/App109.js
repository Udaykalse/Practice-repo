let str = "Udaysinh";
let vowels = "aeiou";
let count = 0;

for (let ch of str.toLowerCase()) {
  for (let v of vowels) if (ch === v) count++;
}
console.log(count);

console.log((str.match(/[aeiou]/gi) || []).length);
