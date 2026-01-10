let user = { profile: { address: { city: "Pune" } } };

let city =
  user && user.profile && user.profile.address && user.profile.address.city;

console.log(city);
