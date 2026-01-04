const readline = require("readline-sync");

const db = {
  "ParvejS123@gmail.com": "09876",
  "Sidharthko221@gmail.com": "12345",
};

let userName = readline.question("Entre Your User Name :- ");
let userPassword = readline.question("Entre Your Password :- ", {
  hideEchoBack: true,
});

for (let key in db) {
  if (userName === key) {
    while (userPassword !== db[key]) {
      userPassword = readline.question("Wrong Password ,Try Again....", {
        hideEchoBack: true,
      });
    }
    break;
  }
}

console.log("Verified")
console.log("WelCome....!")