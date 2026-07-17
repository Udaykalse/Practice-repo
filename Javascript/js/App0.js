function fact(a) {
  sum = 1;
  for (var i = 1; i <= a; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(fact(5));


