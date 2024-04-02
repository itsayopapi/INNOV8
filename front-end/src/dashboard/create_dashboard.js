function createDashboard() {
  const iframe = document.createElement("iframe");
  iframe.title = "Hackathon Dashboard";
  iframe.src =
    "https://app.powerbi.com/view?r=eyJrIjoiN2FjMTlhZjItYzE5Ny00MDU5LTgwYTEtZGM3YmMwYWMzN2IxIiwidCI6ImNhOWE4YjhjLTNlYTMtNDc5OS1hNDNlLTU1MTAzOThlN2EzYiIsImMiOjh9";
  iframe.frameBorder = "0";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.allowFullscreen = true;
  return iframe;
}

module.exports = { createDashboard };
