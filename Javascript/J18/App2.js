let salaries = [20000, 30000, 25000, 40000];

function totalSalary(salaries) {
  const totalOfTheSalary = salaries.reduce(function (sum, sal) {
    return sum + sal;
  });
  return totalOfTheSalary;
}

console.log(
  `All Employee's Salary :- ${salaries} and total salary from employee salary list. ${totalSalary(
    salaries
  )}`
);
