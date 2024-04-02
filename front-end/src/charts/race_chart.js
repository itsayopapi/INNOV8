const { createPieChart } = require("./pie_chart");
const { fetchAPI } = require("../fetchAPI");

async function createRaceChart() {
  const { labels, values } = await fetchAPI.fetchRaceChart();
  const chart = await createPieChart(
    values,
    labels,
    "race-chart",
    "Unemployment by Race",
    "Unemployment Rate"
  );
  chart.classList.add("not-active-chart");
  return chart;
}

module.exports = { createRaceChart };
