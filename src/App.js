import { Countdown } from "./components/Countdown";

import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="countdown-container">
        <h1>A big day is coming soon, your birthday Lesly!</h1>
        <Countdown />
      </div>
    </main>
  );
}

export default App;
