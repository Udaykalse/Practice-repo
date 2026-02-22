console.log("Start")
setTimeout(()=>console.log("SetTImeOut"),0);
Promise.resolve().then(()=>console.log("Promise"))
console.log("end")

// Start
// end
// Promise
// Settimeout