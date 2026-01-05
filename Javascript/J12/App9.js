const getKMPL = (km, fuel) => km / fuel;

const logEfficiency = (val) => console.log(`Efficiency : ${val} km/l`);

function carTest(dist, gas) {
  const result = getKMPL(dist, gas);
  logEfficiency(result);
}

carTest(100, 5);
