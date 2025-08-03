import React, { useState } from "react";
import SignalFeed from "./SignalFeed";
import AlertCenter from "./AlertCenter";
import ChartView from "./ChartView";

function App() {
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState("");

  if (!auth) {
    return (
      <div className="p-4">
        <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
        <button onClick={() => {
          if (pwd === import.meta.env.VITE_DASHBOARD_PASSWORD) setAuth(true);
        }}>Login</button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <ChartView />
      <SignalFeed />
      <AlertCenter />
    </div>
  );
}

export default App;
