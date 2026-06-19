function outer(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(outer(1)(2)(3));
