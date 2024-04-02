const { randomColor } = require("randomcolor");

function generateRandomColor(numberOfColors) {
  return randomColor({
    count: numberOfColors,
  });
}

module.exports = { generateRandomColor };
