function totalCartValue(cart) {
  const cartValue = cart.reduce(function (total, itM) {
    const totalValue = total + itM.price;
    return totalValue;
  }, 0);
  return cartValue;
}

console.log(totalCartValue([
  { price: 200 },
  { price: 400 },
  { price: 150 }
]));