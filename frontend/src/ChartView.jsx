import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data: Replace with actual candles + EMA/RSI overlays
    const candles = Array.from({ length: 20 }, (_, i) => ({
      time: `10:${i < 10 ? "0" + i : i}`,
      price: 2800 + Math.random() * 10,
      ema20: 2805 + Math.random() * 5,
      rsi: 30 + Math.random() * 40,
    }));
    setData(candles);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">📉 Chart View (Mock)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
          <Line type="monotone" dataKey="ema20" stroke="#82ca9d" name="EMA20" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
