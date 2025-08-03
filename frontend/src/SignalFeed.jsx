import { useEffect, useState } from "react";

export default function SignalFeed() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const fetchSignals = async () => {
      const res = await fetch("/api/signals");
      const data = await res.json();
      setSignals(data);
    };

    fetchSignals();
    const interval = setInterval(fetchSignals, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold">📩 Telegram Signals</h2>
      <ul className="text-sm mt-2 max-h-60 overflow-y-auto">
        {signals.map((line, idx) => <li key={idx}>{line}</li>)}
      </ul>
    </div>
  );
}
