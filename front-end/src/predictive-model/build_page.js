const { createForm } = require("./form");

async function buildPredictivePage() {
  const page = document.createElement("div");
  page.id = "predictivePage";
  page.appendChild(await createForm());
  const result = document.createElement("div");
  result.id = "result";
  const message = document.createElement("div");
  message.id = "message";
  const header = document.createElement("h1");
  header.innerHTML = "Predictive Model";
  header.id = "header-predictive";
  const context = document.createElement("p");
  context.id = "context";
  context.innerHTML = "Please fill out the form to receive your prediction.";
  message.appendChild(header);
  message.appendChild(context);
  result.appendChild(message);
  page.appendChild(result);
  return page;
}

module.exports = { buildPredictivePage };
