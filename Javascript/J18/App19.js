function isAnyUserActive(users) {
  const activeCheck = users.some(function (user) {
    const checkingValue = user.active === true;
    return checkingValue;
  });
  return activeCheck;
}

console.log(
  isAnyUserActive([
    { name: "A", active: false },
    { name: "B", active: true },
  ])
);
