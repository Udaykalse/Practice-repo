let user = { profile: { address: { city: "Pune" } } };

let city;
if (user && user.profile && user.profile.address) {
  city = user.profile.address.city;
}

console.log(city);
