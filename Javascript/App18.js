let str = "hello World";

let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let cap_Words = words.join(" ");

console.log(cap_Words);
