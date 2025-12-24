var cart = ["Pen", "Book"];
var newItem = ["Pencil", "Eraser"];

var updateCart = [...cart, ...newItem];

for (var i = 0; i < updateCart.length; i++) {
  console.log(updateCart[i]);
}
