import { useState } from "react";
import Celebration from "./Celebration";

const sentences = [
  { text: "I love playing football.", answer: "positive" },
  { text: "I am sad today.", answer: "negative" },
  { text: "The book is on the table.", answer: "neutral" },
];

export default function ExerciseDragDrop({ onNext }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false); // Celebration trigger
  const [selected, setSelected] = useState(null);

  const handleChoice = (choice) => {
    setSelected(choice);
    const correct = choice === sentences[index].answer;

    if (correct) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
      setIsCorrect(true);
    } else {
      setFeedback("❌ Oops! That was " + sentences[index].answer.toUpperCase());
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelected(null);
      setFeedback("");
      setIsCorrect(false);

      if (index + 1 < sentences.length) {
        setIndex(index + 1);
      } else {
        // include last answer in score if correct
        const finalScore = score + (correct ? 1 : 0);
        onNext(finalScore, sentences.length);
      }
    }, 1200);
  };

  return (
    <div className="text-center max-w-2xl relative p-6">
      {/* Celebration animation */}
      <Celebration trigger={isCorrect} duration={1200} />

      <h2 className="text-3xl font-bold mb-6">Exercise 1: Match the Mood 🎲</h2>
      <p className="text-xl mb-6">
        Sentence: <b>{sentences[index].text}</b>
      </p>

      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        <button
          onClick={() => handleChoice("positive")}
          className={`w-32 h-32 text-6xl rounded-xl transition transform hover:scale-105 ${
            selected === "positive" ? "bg-green-500" : "bg-green-400"
          }`}
        >
          😊
        </button>
        <button
          onClick={() => handleChoice("negative")}
          className={`w-32 h-32 text-6xl rounded-xl transition transform hover:scale-105 ${
            selected === "negative" ? "bg-red-500" : "bg-red-400"
          }`}
        >
          😢
        </button>
        <button
          onClick={() => handleChoice("neutral")}
          className={`w-32 h-32 text-6xl rounded-xl transition transform hover:scale-105 ${
            selected === "neutral" ? "bg-gray-400" : "bg-gray-300"
          }`}
        >
          😐
        </button>
      </div>

      {feedback && <p className="text-2xl">{feedback}</p>}
    </div>
  );
}
