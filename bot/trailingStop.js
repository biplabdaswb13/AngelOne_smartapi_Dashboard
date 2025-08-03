module.exports = {
  startTrailingStop: (symbol, entryPrice, direction) => {
    console.log(`[TRAIL] ${direction} ${symbol} from ₹${entryPrice}`);
    // Add trailing SL logic here...
  }
};
