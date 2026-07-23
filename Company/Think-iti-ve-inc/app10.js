let str = "abc123xyz";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
        result += str[i];
    }
}

console.log(result);