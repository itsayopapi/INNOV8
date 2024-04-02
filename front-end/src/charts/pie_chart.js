const {
  Chart,
  PieController,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} = require("chart.js");

const { generateRandomColor } = require("./random_colors");

Chart.register(
  PieController,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

async function createPieChart(values, labels, id, title, label) {
  const chartContainer = document.createElement("div");
  chartContainer.classList.add("chart-container");
  const canvas = document.createElement("canvas");
  canvas.id = id;
  const ctx = canvas.getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: values,
          backgroundColor: generateRandomColor(values.length),
          borderColor: generateRandomColor(values.length),
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
  chartContainer.appendChild(canvas);
  return chartContainer;
}

module.exports = { createPieChart };
