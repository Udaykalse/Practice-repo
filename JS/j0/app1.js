let str = "Udaysinh Kalse Siddharth Ko";
let count = 0;
let vowels = "aeiouAEIOU";
for (let ch of str) {
  if (vowels.includes(ch)) count++;
}

console.log(count)