const sheetId = "11xQVomiL3WEjn56ZnXd1nRe4FUm--tenRSoh-MKKpcQ";
let chartInstance = null;

function loadSheetData() {
  const sheetName = document.getElementById("sheetSelector").value;
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tq=SELECT%20*&sheet=${encodeURIComponent(sheetName)}&tqx=out:csv`;

  fetch(url)
    .then((res) => res.text())
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          renderChart(sheetName, results.data);
        },
      });
    });
}

function renderChart(sheetName, data) {
  const counts = {};

  if (sheetName === "Connections") {
    data.forEach((row) => {
      const company = row["Company Name"];
      const connections = Number(row["connections"]) || 1;
      if (company) counts[company] = (counts[company] || 0) + connections;
    });
  } else if (sheetName === "Engagement") {
    data.forEach((row) => {
      const company = row["Company"] || "Unknown";
      if (company) counts[company] = (counts[company] || 0) + 1;
    });
  } else if (sheetName === "MNC Engag") {
    data.forEach((row) => {
      const company = row["Company"] || "Unknown";
      if (company) counts[company] = (counts[company] || 0) + 1;
    });
  } else if (sheetName === "MNC ENgagement(Comments)") {
    data.forEach((row) => {
      const company = row["Comapny"] || "Unknown";
      if (company) counts[company] = (counts[company] || 0) + 1;
    });
  } else if (sheetName === "Emails") {
    const firstHeader = Object.keys(data[0] || {})[0];
    counts["Total Emails"] = data.filter((r) => r[firstHeader]).length;
  } else if (sheetName === "job application tracker") {
    data.forEach((row) => {
      const status = row["Medium.Status"] || row["Status"] || "Applied";
      if (status) counts[status] = (counts[status] || 0) + 1;
    });
  }

  const labels = Object.keys(counts);
  const values = Object.values(counts);

  const ctx = document.getElementById("myChart").getContext("2d");
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: `${sheetName} Summary`,
          data: values,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

loadSheetData();
