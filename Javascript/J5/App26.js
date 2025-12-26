// optional Chaning
const user = {
  fName: "Aman",
  cityName: "Latur",
  edu: {
    collegeName: "Dayanand Science College",
    Dept: "Arts",
    subject: {
      firstSub: "Marathi",
    },
  },
};

console.log(user?.cityName);
console.log(user?.edu?.collegeName);
console.log(user?.edu?.subject?.secondSub);
