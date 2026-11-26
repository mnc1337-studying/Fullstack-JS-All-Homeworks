import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible(!isVisible);

  return (
    <>
      <h1>Секретне повідомлення</h1>
      <button onClick={handleClick}>
        {isVisible ? "Сховати" : "Показати"}
      </button>
      <p>{isVisible && "Привіт! Ви знайшли приховане повідомлення 🎉"}</p>
    </>
  );
}

export default App;