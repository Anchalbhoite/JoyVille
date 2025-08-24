// src/Minigame/MiniGames.jsx
import { Routes, Route, Link } from "react-router-dom";
import FruitColoringBook from "./FruitColoring"; // 

export default function MiniGames() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎮 Mini Games</h1>

      <nav className="flex gap-4 mb-6">
        <Link to="fruit-coloring" className="text-blue-600 underline">
          🍎 Fruit Coloring
        </Link>
      </nav>

      <Routes>
        <Route path="fruit-coloring" element={<FruitColoringBook />} />
      </Routes>
    </div>
  );
}
