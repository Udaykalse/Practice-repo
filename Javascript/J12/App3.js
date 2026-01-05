const canVote = (age) => age >= 18;

const printEligible = (ok) => console.log(ok ? "Eligible" : "Underage");

function verifyVoter(age) {
  const status = canVote(age);
  printEligible(status);
}

verifyVoter(21);
