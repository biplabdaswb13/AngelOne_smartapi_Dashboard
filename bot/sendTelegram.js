const axios = require("axios");

module.exports = async function sendTelegram(message) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    await axios.post(url, { chat_id: chatId, text: message });
    console.log("Telegram Signal Sent:", message);
  } catch (err) {
    console.error("Telegram Error:", err.message);
  }
};
