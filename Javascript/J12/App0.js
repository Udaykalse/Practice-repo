const cleanName = (str) => str.trim().toLowerCase();

const dbUpdate = (user) => console.log(`User ${user} stored in DB`);

function register(input) {
  const user = cleanName(input);
  dbUpdate(user);
}

register("   AdmIN_UseR");
