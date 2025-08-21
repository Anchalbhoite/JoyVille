import React, { useState } from "react";
import Celebration from "./Celebration";

const storySentences = [
  { text: "Tom got a new skateboard today! He is so excited 😄", answer: "positive" },
  { text: "Sara forgot her homework at home and felt worried 😟", answer: "negative" },
  { text: "It is cloudy outside, but Sam is playing quietly in his room 😐", answer: "neutral" },
  { text: "Leo scored a goal in the football match! He jumps with joy ⚽😃", answer: "positive" },
  { text: "Mia lost her favorite pencil 😢", answer: "negative" },
];

export default function StoryActivity({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (choice) => {
    setSelected(choice);
    const correct = choice === storySentences[currentIndex].answer;

    if (correct) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(false);

      if (currentIndex + 1 < storySentences.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        const finalScore = score + (correct ? 1 : 0);
        onNext(finalScore, storySentences.length);
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl p-6">
      {/* Celebration */}
      <Celebration trigger={isCorrect} duration={1200} />

      <h1 className="text-3xl font-bold mb-6 text-purple-700 animate-pulse">📖 Story Time!</h1>
      <p className="text-xl mb-6 leading-relaxed text-center">
        {storySentences[currentIndex].text}
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-6">
        <button
          onClick={() => handleAnswer("positive")}
          className={`px-4 py-2 rounded-xl font-bold text-white text-xl transition transform hover:scale-105 ${
            selected === "positive" ? "bg-green-500" : "bg-green-400"
          }`}
        >
          😊 Positive
        </button>
        <button
          onClick={() => handleAnswer("negative")}
          className={`px-4 py-2 rounded-xl font-bold text-white text-xl transition transform hover:scale-105 ${
            selected === "negative" ? "bg-red-500" : "bg-red-400"
          }`}
        >
          😢 Negative
        </button>
        <button
          onClick={() => handleAnswer("neutral")}
          className={`px-4 py-2 rounded-xl font-bold text-white text-xl transition transform hover:scale-105 ${
            selected === "neutral" ? "bg-yellow-500" : "bg-yellow-400"
          }`}
        >
          😐 Neutral
        </button>
      </div>

      {selected && (
        <p className="mt-4 text-2xl font-semibold">
          {selected === storySentences[currentIndex].answer ? "🎉 Yay! Correct!" : "❌ Oops! Try again!"}
        </p>
      )}
    </div>
  );
}
