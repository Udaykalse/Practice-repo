fetchUser()
  .then((user) => fetchOrders(user.id))
  .then((orders) => console.log(orders))
  .catch((err) => console.error(err));

async function getOrder() {
  try {
    const user = await fetchUser();
    const order = await fetchOrders(user.id);
    console.log(order);
  } catch (err) {
    console.error(err);
  }
}
