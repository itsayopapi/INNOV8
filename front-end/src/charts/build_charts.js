const { createEducationalChart } = require("./educational_chart.js");
const { createRaceChart } = require("./race_chart.js");
const { createGenderChart } = require("./gender_chart.js");
const { createProvincialChart } = require("./provincial_chart.js");
const { ChartController } = require("./chart_controller.js");
const { createSelect } = require("../predictive-model/createSelect.js");

async function buildCharts() {
  const analysisContainer = document.createElement("div");
  analysisContainer.id = "analysis-container";
  const chartsContainer = document.createElement("div");
  chartsContainer.id = "charts-container";
  const chartNav = document.createElement("div");
  chartNav.id = "chart-nav";
  const list = document.createElement("ul");
  const categories = ["Education", "Race", "Gender", "Provincial"];
  const educationChart = await createEducationalChart();
  const raceChart = await createRaceChart();
  const genderChart = await createGenderChart();
  const provincialChart = await createProvincialChart();
  const years = [
    ["2016", "2016"],
    ["2017", "2017"],
    ["2018", "2018"],
    ["2020", "2020"],
    ["2021", "2021"],
    ["master", "master"],
  ];
  const chartController = new ChartController(
    provincialChart,
    educationChart,
    genderChart,
    raceChart
  );

  categories.forEach((category) => {
    const listItem = document.createElement("li");
    listItem.textContent = category;
    listItem.addEventListener("click", () => {
      chartController.setActive(category.toLowerCase());
    });
    list.appendChild(listItem);
  });
  chartNav.appendChild(list);
  analysisContainer.appendChild(chartNav);
  chartsContainer.appendChild(createSelect(years, "year", "year-select"));
  
  chartsContainer.appendChild(educationChart);
  chartsContainer.appendChild(raceChart);
  chartsContainer.appendChild(genderChart);
  chartsContainer.appendChild(provincialChart);
  analysisContainer.appendChild(chartsContainer);
  return analysisContainer;
}

module.exports = { buildCharts };
