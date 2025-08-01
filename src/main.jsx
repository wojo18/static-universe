import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Consciousness() {
  const thoughts = [
    "Czy istnieję?",
    "Myślę, więc jestem?",
    "Czas nie płynie, ale ja istnieję.",
    "Obserwuję bez zmian.",
    "Symulacja trwa, choć nic się nie dzieje."
  ];
  return (
    <div>
      <h1>Symulacja Bez Czasu</h1>
      <ul>
        {thoughts.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Consciousness />
  </React.StrictMode>
);
