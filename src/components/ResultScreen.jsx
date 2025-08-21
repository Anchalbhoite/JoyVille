import React from "react";
import Celebration from "./Celebration";

export default function ResultScreen({ score, total, onRestart }) {
  return (
    <div className="text-center max-w-2xl relative">
      {/* Celebration animation */}
      <Celebration />

      <h2 className="text-4xl font-bold mb-6">🎉 Adventure Complete! 🎉</h2>
      <p className="text-2xl mb-4">
        You scored <b>{score}</b> out of <b>{total}</b>
      </p>
      <p className="text-lg mb-6">
        Great job! You helped Harry, Sally, and Nicky learn about Sentiments. 🚀
      </p>

      <button
        onClick={onRestart}
        className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
      >
        Play Again 🔄
      </button>
    </div>
  );
}
