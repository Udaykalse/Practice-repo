let cart = [{ price: 100 }, { price: 300 }];
let total = cart.reduce((sum, i) => sum + i.price, 0);
console.log(total);
