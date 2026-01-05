const getTip = (bill) => bill * 0.15;

const showTotal = (bill, tip) => console.log(`Total :- $${bill + tip}`);

function restaurantBill(amt) {
  const tip = getTip(amt);
  showTotal(amt, tip);
}

restaurantBill(100);
