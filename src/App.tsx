import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(Math.floor(Math.random() * 100) % 100);

  return (
    <div className="App">
      <h1>Gayness measurement</h1>
      <h4>{count} / 100</h4>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default App;
