function cu(a) {
  return function (b) {
    return a + b;
  };
}
let val = cu(1)(2)
console.log(val);
//  output why [Function (anonymous)] not 3