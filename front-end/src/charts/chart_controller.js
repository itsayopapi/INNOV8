class ChartController {
  constructor(provincial, education, gender, race) {
    this.active = "provincial";
    this.charts = {
      provincial: provincial,
      education: education,
      gender: gender,
      race: race,
    };
  }

  setActive(newActive) {
    if (newActive === this.active) {
      return;
    }

    this.charts[this.active].classList.remove("active-chart");
    this.charts[this.active].classList.add("not-active-chart");
    this.charts[newActive].classList.add("active-chart");
    this.charts[newActive].classList.remove("not-active-chart");
    this.active = newActive;
  }
}

module.exports = { ChartController };
