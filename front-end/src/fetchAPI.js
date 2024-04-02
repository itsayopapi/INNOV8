class fetchData {
  constructor() {
    this.url = "http://localhost:5000/api/v1";
  }

  #formatData(data, limit = 0) {
    const labels = [];
    const values = [];
    for (const [key, value] of Object.entries(data)) {
      if (value > limit) {
        labels.push(key);
        values.push(value);
      }
    }
    return { labels, values };
  }

  #formatForecastData(data) {
    const labels = [];
    const values = [];
    for (let i = 0; i < data.length; i++) {
      labels.push(data[i].year);
      values.push(data[i].unemployment_rate);
    }
    return { labels, values };
  }

  async fetchProvincialChart(year) {
    const response = await fetch(`${this.url}/provincial_unemployed`);
    const data = await response.json();
    return this.#formatData(data);
  }

  async fetchEducationChart(year) {
    const response = await fetch(`${this.url}/education_unemployed`);
    const data = await response.json();
    return this.#formatData(data, 1);
  }

  async fetchGenderChart(year) {
    const response = await fetch(`${this.url}/gender_unemployed`);
    const data = await response.json();
    return this.#formatData(data);
  }

  async fetchRaceChart(year) {
    const response = await fetch(`${this.url}/race_unemployed`);
    const data = await response.json();
    return this.#formatData(data);
  }

  async predictEmployability(data) {
    const response = await fetch(`${this.url}/predictive_model`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async fetchUnemployedData(startYear = 1991, endYear = 2022) {
    const response = await fetch(`${this.url}/unemployed_rate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startYear, endYear }),
    });
    const result = await response.json();
    return this.#formatForecastData(result);
  }
}

fetchAPI = new fetchData();

module.exports = { fetchAPI };
