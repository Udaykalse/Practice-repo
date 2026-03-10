let person1 = {
  fullName: function (city) {
    console.log(this.first + " " + this.last + " " + city);
  },
};

let person2 = { first: "Amey", last: "Zd" };
person1.fullName.call(person2, "Pune");
