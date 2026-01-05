const sumCart = (item) => item.reduce((sum, p) => sum + p, 0);

const logcart = (total) => console.log(`Cart Total : ₹${total}`);

function checkOut(prices) {
  const total = sumCart(prices);
  logcart(total);
}

checkOut([19.99, 5.0, 15.01]);
