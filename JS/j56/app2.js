console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("TimeOut");
}, 0);

console.log("END");

// 1 , 11, 4, 8