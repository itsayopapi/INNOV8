const { createPieChart } = require("./pie_chart");
const { fetchAPI } = require("../fetchAPI");

async function createGenderChart() {
  const { labels, values } = await fetchAPI.fetchGenderChart();
  const chart = await createPieChart(
    values,
    labels,
    "Gender-chart",
    "Unemployment by Gender",
    "Unemployment Rate"
  );
  chart.classList.add("not-active-chart");
  return chart;
}

module.exports = { createGenderChart };
