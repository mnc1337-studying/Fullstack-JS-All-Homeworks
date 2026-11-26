import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <>
      <h1>Привітання</h1>
      <input
        value={name}
        onChange={handleChange}
        placeholder="Введіть своє ім'я"
      />
      <p>{name ? `Привіт, ${name}!` : "Введіть ім'я, щоб отримати привітання"}</p>
    </>
  );
}

export default App;