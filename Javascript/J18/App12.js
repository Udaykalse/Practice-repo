let salaries = [35000, 15000, 45000, 25000];

function salarySort(arr) {
  const sortedSalary = arr.sort(function (a, b) {
    return a - b;
  });
  return sortedSalary;
}

console.log(salarySort(salaries));