let car = { brand: "Konda" };
function show() {
  console.log(this.brand);
}

show.call(car);
