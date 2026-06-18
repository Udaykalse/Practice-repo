function multiplay(a, b) {
  return a * b;
}

const double = multiplay.bind(null, 2);
console.log(double(5));
