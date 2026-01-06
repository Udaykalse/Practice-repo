var cart = ["pen", "book"];
var newItems = ["pencil", "eraser"];

var updateCart = [...cart, ...newItems];
for (let i = 0; i < updateCart.length; i++) {
  console.log(i,updateCart[i]);
}
