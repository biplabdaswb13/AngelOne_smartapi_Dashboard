const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/signals", (req, res) => {
  const logs = fs.readFileSync("telegram_signals.log", "utf8").split("\n").reverse();
  res.json(logs.filter(Boolean));
});

app.get("/api/alerts", (req, res) => {
  const logs = fs.readFileSync("alerts.log", "utf8").split("\n").reverse();
  res.json(logs.filter(Boolean));
});

app.get("/api/trades", (req, res) => {
  const csv = fs.readFileSync("trade_log.csv", "utf8");
  res.type("text/csv").send(csv);
});

app.listen(PORT, () => console.log(`📡 Backend API running on http://localhost:${PORT}`));
