const getBMI = (w, h) => w / (h * h);

const logBMI = (bmi) => console.log(`BMI : ${bmi.toFixed(1)}`);

function healthCheck(wei, hei) {
  const bmi = getBMI(wei, hei);
  logBMI(bmi)
}

healthCheck(65, 1.8)