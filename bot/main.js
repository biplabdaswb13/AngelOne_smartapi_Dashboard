const { SmartAPI } = require("smartapi-javascript");
const indicators = require("./utils/indicators");
const detectRSIDivergence = require("./rsiDivergence");
const sendTelegram = require("./sendTelegram");
const trailStop = require("./trailingStop");

require("dotenv").config();

const api = new SmartAPI({
  api_key: process.env.SMARTAPI_API_KEY,
});

async function runStrategy() {
  try {
    const session = await api.generateSession(process.env.SMARTAPI_CLIENT_ID, process.env.SMARTAPI_SECRET);
    const token = session.data.refreshToken;

    const liveFeed = await api.getQuote(["NSE:RELIANCE"]);
    const price = liveFeed.data["NSE:RELIANCE"].last_price;

    const candles = await indicators.getHistoricalCandles("RELIANCE");
    const emaSignal = indicators.emaCrossover(candles);
    const isDivergence = detectRSIDivergence(candles);
    const vwapOk = indicators.vwapFilter(candles);

    if (emaSignal && !isDivergence && vwapOk && !indicators.isLunchTime()) {
      const direction = emaSignal === "buy" ? "BUY" : "SELL";
      sendTelegram(`📈 ${direction} Signal - RELIANCE at ₹${price}`);
      trailStop.startTrailingStop("RELIANCE", price, direction);
    }
  } catch (err) {
    console.error("Strategy Error:", err.message);
  }
}

setInterval(runStrategy, 60000);
