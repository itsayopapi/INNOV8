const { buildForecastPage } = require("./charts/build_forecast_chart");

class Controller {
  constructor(predictiveModelPage, forecastModelPage, app, dashboard) {
    this.app = app;
    this.active = predictiveModelPage;
    this.app.appendChild(this.active);
    this.forecastModelPage = forecastModelPage;
    this.predictiveModelPage = predictiveModelPage;
    this.dashboardPage = dashboard;
  }

  displayForecastModelPage() {
    if (this.active === this.forecastModelPage) return;
    this.app.removeChild(this.active);
    this.active = this.forecastModelPage;
    this.app.appendChild(this.active);
  }

  displayPredictiveModelPage() {
    if (this.active === this.predictiveModelPage) return;
    this.app.removeChild(this.active);
    this.active = this.predictiveModelPage;
    this.app.appendChild(this.active);
  }

  displayDashboardPage() {
    if (this.active === this.dashboardPage) return;
    this.app.removeChild(this.active);
    this.active = this.dashboardPage;
    this.app.appendChild(this.active);
  }
}

module.exports = { Controller };
