const technicalindicators = require("technicalindicators");

exports.getHistoricalCandles = async (symbol) => {
  // Mock data for now
  return [{ close: 2800, high: 2820, low: 2780, open: 2790, time: Date.now() }];
};

exports.emaCrossover = (candles) => {
  // Dummy logic: Replace with 20/50 EMA crossover
  return Math.random() > 0.5 ? "buy" : "sell";
};

exports.vwapFilter = (candles) => true;

exports.isLunchTime = () => {
  const now = new Date();
  const hour = now.getHours(), min = now.getMinutes();
  return (hour === 12 || (hour === 13 && min < 30));
};
