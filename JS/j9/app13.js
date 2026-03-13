function tax(rate) {
  return function (amt) {
    return amt * rate;
  };
}

const gst = tax(0.18);
console.log(gst(100));
