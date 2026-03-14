let str = "devops engineer interview";

let long = "";
str.split(" ").forEach((w) => {
  if (w.length > long.length) long = w;
});

console.log(long)
