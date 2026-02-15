let str = "Udaysinh Govindrao Kalse";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (vowels.includes(ch)) {
    count++;
  }
}

console.log(count);
