# 📈 AngelOne SmartAPI Intraday Trading Bot & Dashboard

A complete intraday trading bot for the Indian stock market built with **Node.js**, **React**, and **AngelOne SmartAPI**, featuring:

- 🔁 EMA crossover strategy
- 🎯 VWAP filter & RSI divergence
- 📩 Buy/Sell signal alerts to Telegram
- 🛡️ Trailing stop-loss engine
- 📉 Web dashboard to monitor everything live
- 📁 Google Sheets logging (optional)

---

## 🚀 Features

- ✅ EMA 20/50 crossover strategy
- ✅ VWAP confirmation
- ✅ RSI divergence detection to avoid traps
- ✅ Skip trades during 12:00 PM – 1:30 PM
- ✅ Telegram alerts (Buy/Sell)
- ✅ Trailing Stop-Loss Engine
- ✅ Logs trades to Google Sheet & CSV
- ✅ Real-time web dashboard with:
  - Signal Feed
  - Alert Viewer
  - Chart with EMA & RSI
  - Filter by Symbol/Date
  - CSV export
  - Mobile-friendly UI
  - Optional password protection

---

## 🔧 Setup Instructions

### 1. Clone this repo

```bash
git clone https://github.com/biplabdaswb13/AngelOne_smartapi_Dashboard.git
cd AngelOne_smartapi_Dashboard
   - Install dependencies
npm install
cd frontend
npm install

  - Create .env file in the root based on .env.example:

# In terminal 1: Run strategy bot
node bot/main.js

# In terminal 2: Start backend API
node backend/index.js

# In terminal 3: Launch frontend
cd frontend
npm run dev

# 📍 Visit http://localhost:5173 to view the dashboard.