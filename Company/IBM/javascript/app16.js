class sum {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  total() {
    return this.a + this.b;
  }
}

console.log(new sum(3, 4).total());
