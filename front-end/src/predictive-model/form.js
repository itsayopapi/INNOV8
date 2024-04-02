const { createSelect } = require("./createSelect");
const { fetchAPI } = require("../fetchAPI");
const encodedData = require("./labelEncodingData");

async function createForm() {
  const form = document.createElement("form");

  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("name", "age");
  ageInput.setAttribute("min", "0");

  const weightInput = document.createElement("input");
  weightInput.setAttribute("type", "number");
  weightInput.setAttribute("name", "weight");
  weightInput.setAttribute("min", "0");

  ageInput.setAttribute("placeholder", "Enter your age");
  weightInput.setAttribute("placeholder", "Enter your weight");

  form.appendChild(ageInput);
  form.appendChild(weightInput);

  for (let i = 0; i < encodedData.length; i++) {
    form.appendChild(createSelect(encodedData[i][1], encodedData[i][0]));
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerHTML = "Predict";
  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (ageInput.value === "") {
      alert("Please enter your age");
      return;
    }

    if (weightInput.value === "") {
      alert("Please enter your weight");
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const result = await fetchAPI.predictEmployability(data);
    document.getElementById("context").textContent = result;
  });
  form.appendChild(submitButton);
  return form;
}

module.exports = { createForm };
