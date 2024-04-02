const { fetchAPI } = require("../fetchAPI");
const { createBarChart } = require("./bar_graph");

async function createEducationalChart() {
  const { labels, values } = await fetchAPI.fetchEducationChart();
  const chart = await createBarChart(
    values,
    labels,
    "educational-chart",
    "Unemployment by Education",
    "Unemployment Rate"
  );
  chart.classList.add("not-active-chart");
  console.log(chart.classList);
  return chart;
}

module.exports = { createEducationalChart };
