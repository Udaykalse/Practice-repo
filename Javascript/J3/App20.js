var users = {
  u1: true,
  u2: false,
  u3: true,
};

var count = 0;

for (var key in users) {
  if (users[key] === true) {
    count++;
  }
}

console.log(count)