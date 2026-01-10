let str = "Javascript";

let count = str.split("").filter((char) => "aeiouAEIOU".includes(char)).length;

console.log("count :- ", count);
