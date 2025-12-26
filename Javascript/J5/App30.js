function curryingAddition(a) {
  return function (b) {
    return a + b;
  };
}

console.log(curryingAddition(1)(2))