function fibonacci(n) {
  return Array(n)
    .fill(0)
    .reduce((a, _, i) => {
      if (i < 2) a.push(i);
      else a.push(a[i - 1] + a[i - 2]);
      return a;
    }, []);
}

console.log(fibonacci(5));
