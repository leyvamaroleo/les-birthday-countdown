import { useState, useCallback } from "react";
import { Countdown } from "./components/Countdown";

import "./App.css";

function App() {
  const [isLimitTime, setIsLimitTime] = useState(false);

  const handleReachLimitTime = useCallback(() => {
    setIsLimitTime(true);
  }, []);

  return (
    <main className="main">
      <div className="countdown-container">
        <h1>
          {isLimitTime
            ? "HAPPY BIRTHDAY CHOKIS, LOVE AND A BIG HUG, YOU ARE THE BEST!!!"
            : "A big day is coming soon, your birthday Lesly!"}
        </h1>
        <Countdown onReachLimitTime={handleReachLimitTime} />
      </div>
    </main>
  );
}

export default App;
