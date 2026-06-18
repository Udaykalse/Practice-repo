function add(a, b) {
  console.log(a + b);
}
const result = add.bind(null, 10, 20);
result();
