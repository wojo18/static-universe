import React, { useState } from "react";

const STRUCTURE = {
  S0: { next: "S1", data: "🌌 Początkowy stan cząstki w punkcie A" },
  S1: { next: "S2", data: "✨ Cząstka pojawiła się w punkcie B" },
  S2: { next: "S3", data: "🚀 Cząstka przemieściła się do punktu C" },
  S3: { next: null, data: "🕳️ Cząstka znikła z obserwacji" },
};

function inferCurrentState(history) {
  const last = history[history.length - 1];
  return STRUCTURE[last]?.data || "Nieznane";
}

function generateThought(history) {
  const thoughts = {
    S0: "To chyba początek czegoś większego...",
    S1: "Czuję, że coś się zbliża...",
    S2: "Ruch... Czy to znaczy, że istnieję?",
    S3: "Znikam? Czy to koniec świadomości?",
  };
  const last = history[history.length - 1];
  return thoughts[last] || "Nie rozumiem tego miejsca.";
}

export default function App() {
  const [currentKey, setCurrentKey] = useState("S0");
  const [history, setHistory] = useState(["S0"]);
  const [inferredState, setInferredState] = useState(STRUCTURE["S0"].data);
  const [thought, setThought] = useState(generateThought(["S0"]));

  const goToNext = () => {
    const next = STRUCTURE[currentKey].next;
    if (next) {
      setCurrentKey(next);
      setHistory((prev) => {
        const newHistory = [...prev, next];
        setInferredState(inferCurrentState(newHistory));
        setThought(generateThought(newHistory));
        return newHistory;
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">🧠 Symulacja Wszechświata Bez Czasu</h1>
      <div className="w-full max-w-xl bg-gray-800 border-white border p-4 space-y-4">
        <div className="text-xl">{STRUCTURE[currentKey].data}</div>
        <button
          className="px-4 py-2 bg-white text-black rounded disabled:opacity-40"
          onClick={goToNext}
          disabled={!STRUCTURE[currentKey].next}
        >
          {STRUCTURE[currentKey].next ? "Zobacz kolejny stan" : "Koniec ścieżki"}
        </button>
        <div className="text-sm text-gray-400 mt-2">
          Ścieżka percepcji: {history.join(" → ")}
        </div>
        <div className="text-sm text-blue-400 mt-2">
          🧠 Świadomość myśli, że jest w stanie: <br />
          <span className="italic">{inferredState}</span>
        </div>
        <div className="text-sm text-green-400 mt-2">
          💭 Myśl: <br />
          <span className="italic">"{thought}"</span>
        </div>
      </div>
    </div>
  );
}
