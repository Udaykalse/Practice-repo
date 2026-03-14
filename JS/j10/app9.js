const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entre First Number :- ", function (num1) {
  rl.question("Entre Second Number :- ", function (num2) {
    rl.question(
      "Entre Operatio (1 : + , 2 : - , 3 : * , 4: %) :- ",
      function (op) {
        num1 = Number(num1);
        num2 = Number(num2);
        op = Number(op);
        let result;
        switch (op) {
          case 1:
            result = num1 + num2;
            break;
          case 2:
            result = num1 - num2;
            break;
          case 3:
            result = num1 * num2;
            break;
          case 4:
            result = num1 % num2;
            break;
          default:
            result = "Invalid Operation";
        }
        console.log("Result :- ", result);
        rl.close();
      },
    );
  });
});
