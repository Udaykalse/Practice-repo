let user = "admin";
let pass = "1234";
function login(u, p) {
  return u === user && p === pass;
}
console.log(login("admin", "1234"));
