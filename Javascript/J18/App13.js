let ages = [22, 25, 19, 30];

function allAdults(arr) {
  const adultEmp = arr.every(function (age) {
    return age >= 18;
  });
  return adultEmp;
}

console.log(allAdults(ages));
