const user = {
  name: "Uday",
  city: {
    homeTwon: "Murud",
    dist: "Latur",
    State: "MH",
    conatact: {
      pin: 413510,
    },
  },
};

console.log(user?.name)
console.log(user?.State)
console.log(user?.city?.State)

console.log(user?.city?.conatact?.phone)
