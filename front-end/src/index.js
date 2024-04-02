const { buildPredictivePage } = require("./predictive-model/build_page");
const { buildForecastPage } = require("./charts/build_forecast_chart");
const { createDashboard } = require("./dashboard/create_dashboard");
const { Controller } = require("./appController");

import "./styles/canvas.css";
import "./styles/index.css";
import "./styles/form.css";

async function buildUI() {
  const app = document.getElementById("app");
  const individualModelPage = document.getElementById("individual-model");
  const dashboardPage = document.getElementById("dashboard");
  const forecastModelPage = document.getElementById("forecast-model");
  const predictiveModel = await buildPredictivePage();
  const forecastModel = await buildForecastPage();
  const dashboard = createDashboard();
  const appController = new Controller(
    predictiveModel,
    forecastModel,
    app,
    dashboard
  );
  individualModelPage.addEventListener("click", () => {
    appController.displayPredictiveModelPage();
  });
  forecastModelPage.addEventListener("click", () => {
    appController.displayForecastModelPage();
  });
  dashboardPage.addEventListener("click", () => {
    appController.displayDashboardPage();
  });
}

buildUI();
