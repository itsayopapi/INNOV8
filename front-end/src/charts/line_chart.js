const {
  Chart,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} = require("chart.js");

const { generateRandomColor } = require("./random_colors");

Chart.register(
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

async function createLineChart(values, labels, id, label) {
  const chartContainer = document.createElement("div");
  chartContainer.classList.add("chart-container");
  const canvas = document.createElement("canvas");
  canvas.id = id;
  const ctx = canvas.getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          borderColor: "#4169E2",
          data: values,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  chartContainer.appendChild(canvas);
  return { chartContainer, myChart };
}

module.exports = { createLineChart };
