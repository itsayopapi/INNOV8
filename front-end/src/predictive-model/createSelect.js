function createSelect(data, name, className = "form-class") {
  var select = document.createElement("select");
  select.classList.add(className);
  select.setAttribute("name", name);

  for (var i = 0; i < data.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", data[i][1]);
    option.textContent = data[i][0];
    select.appendChild(option);
  }
  return select;
}

module.exports = { createSelect };
