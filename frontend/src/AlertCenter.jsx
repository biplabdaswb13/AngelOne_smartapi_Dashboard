import { useEffect, useState } from "react";

export default function AlertCenter() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const res = await fetch("/api/alerts");
      const data = await res.json();
      setAlerts(data);
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold">⚠️ Alert Center</h2>
      <ul className="text-sm mt-2 max-h-60 overflow-y-auto">
        {alerts.map((line, idx) => <li key={idx}>{line}</li>)}
      </ul>
    </div>
  );
}
