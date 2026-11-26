import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const style = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#222",
    minHeight: "100vh",
    padding: "20px",
  };

  const handleClick = () => setIsDark(!isDark);

  return (
    <div style={style}>
      <h1>Перемикач теми</h1>
      <p>Зараз увімкнена {isDark ? "темна" : "світла"} тема.</p>
      <button onClick={handleClick}>
        Перемкнути на {isDark ? "світлу" : "темну"}
      </button>
    </div>
  );
}

export default App;