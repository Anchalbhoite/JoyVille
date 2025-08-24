import React, { useState } from "react";

const fruits = [
  {
    name: "Apple",
    svg: (
      <path
        d="M60 15 C80 15, 100 40, 90 70 C80 100, 40 100, 30 70 C20 40, 40 15, 60 15 Z"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    ),
  },
  {
    name: "Banana",
    svg: (
      <path
        d="M20 70 C40 110, 100 110, 100 40 C80 70, 40 50, 20 70 Z"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    ),
  },
  {
    name: "Orange",
    svg: (
      <circle
        cx="60"
        cy="60"
        r="40"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    ),
  },
  {
    name: "Grapes",
    svg: (
      <g stroke="black" strokeWidth="3" fill="white">
        <circle cx="40" cy="40" r="12" />
        <circle cx="60" cy="30" r="12" />
        <circle cx="80" cy="40" r="12" />
        <circle cx="50" cy="55" r="12" />
        <circle cx="70" cy="55" r="12" />
        <circle cx="60" cy="70" r="12" />
      </g>
    ),
  },
  {
    name: "Strawberry",
    svg: (
      <path
        d="M60 20 C90 30, 100 70, 60 100 C20 70, 30 30, 60 20 Z"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    ),
  },
  {
    name: "Watermelon",
    svg: (
      <path
        d="M20 80 Q60 20, 100 80 Q60 120, 20 80 Z"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    ),
  },
];

const FruitColoring = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [colors, setColors] = useState({});

  const handleColor = (fruitName) => {
    setColors((prev) => ({ ...prev, [fruitName]: selectedColor }));
  };

  const resetColors = () => setColors({});

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🍎 Fruit Coloring Book</h2>

      {/* Color Picker */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-16 h-10 border rounded cursor-pointer"
        />
        <button
          onClick={resetColors}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:scale-105 transition"
        >
          Clear All ❌
        </button>
      </div>

      {/* Fruits Grid */}
<div className="fruit-grid">
  {fruits.map((fruit, idx) => (
    <div
      key={idx}
      className="fruit-card"
      onClick={() => handleColor(fruit.name)}
    >
      <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto">
        {React.cloneElement(fruit.svg, {
          fill: colors[fruit.name] || "white",
        })}
      </svg>
      <p className="mt-2 font-medium">{fruit.name}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default FruitColoring;
