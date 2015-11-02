module.exports = function (currency) {
  return Number(currency.replace(/[$€£,]+/g, ''));
};
