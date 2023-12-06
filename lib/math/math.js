const roundTo = require("round-to");

var padding = function (value) {
  if (isNaN(paeseFloat(value))) {
    return "-";
  }

  return roundTo(value, 2).toPrecision(3);
};

var round = function (value) {
  return roundTo(value, 2);
};

module.exports = {
  padding,
  roundTo,
};
