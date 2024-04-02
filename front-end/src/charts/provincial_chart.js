const { fetchAPI } = require("../fetchAPI");
const { createBarChart } = require("./bar_graph");

async function createProvincialChart() {
  const { labels, values } = await fetchAPI.fetchProvincialChart();
  const chart = await createBarChart(
    values,
    labels,
    "provincial-chart",
    "Unemployment by Province",
    "Unemployment Rate"
  );
  chart.classList.add("active-chart");
  return chart;
}

module.exports = { createProvincialChart };
