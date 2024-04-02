const { createLineChart } = require("./line_chart");
const { fetchAPI } = require("../fetchAPI");

async function buildForecastPage(startYear = 1991, endYear = 2022) {
  const forecastPage = document.createElement("div");
  forecastPage.classList.add("forecast-page");
  const title = document.createElement("h2");
  title.textContent = "Forecast Model";
  forecastPage.appendChild(title);
  const start_end = document.createElement("div");
  start_end.classList.add("start-end");
  const start = document.createElement("input");
  start.setAttribute("type", "number");
  start.setAttribute("id", "start");
  start.setAttribute("placeholder", "1991");
  start.value = startYear;

  start_end.appendChild(start);
  const end = document.createElement("input");
  end.setAttribute("type", "number");
  end.setAttribute("id", "end");
  end.setAttribute("placeholder", "2022");
  end.value = endYear;
  start_end.appendChild(end);
  forecastPage.appendChild(start_end);

  const { labels, values } = await fetchAPI.fetchUnemployedData(
    startYear,
    endYear
  );
  const { chartContainer, myChart } = await createLineChart(
    values,
    labels,
    "unemployed-chart",
    "Unemployed"
  );
  start.addEventListener("change", async () => {
    if (start.value < 1991 || start.value > end.value) {
      return;
    }
    const { labels, values } = await fetchAPI.fetchUnemployedData(
      parseInt(start.value),
      parseInt(end.value)
    );
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = values;
    myChart.update();
  });

  end.addEventListener("change", async () => {
    if (end.value < start.value) {
      return;
    }
    const { labels, values } = await fetchAPI.fetchUnemployedData(
      parseInt(start.value),
      parseInt(end.value)
    );
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = values;
    myChart.update();
  });

  forecastPage.appendChild(chartContainer);
  return forecastPage;
}

module.exports = { buildForecastPage };
