const {
  Chart,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} = require("chart.js");

const { generateRandomColor } = require("./random_colors");

Chart.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

async function createBarChart(values, labels, id, title, label) {
  const chartContainer = document.createElement("div");
  chartContainer.classList.add("chart-container");
  const canvas = document.createElement("canvas");
  canvas.id = id;
  const ctx = canvas.getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
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
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
              return value + "%";
            },
          },
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var value =
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return value + "%";
          },
        },
      },
    },
  });
  chartContainer.appendChild(canvas);
  return chartContainer;
}

module.exports = { createBarChart };
