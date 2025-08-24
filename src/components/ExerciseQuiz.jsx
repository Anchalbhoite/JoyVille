// /src/components/ExerciseQuiz.jsx
import { useState } from "react";
import Celebration from "./Celebration";

const quizQuestions = [
  { question: "I am feeling great today!", options: ["positive","negative","neutral"], answer: "positive" },
  { question: "I lost my pencil.", options: ["positive","negative","neutral"], answer: "negative" },
  { question: "The sky is blue.", options: ["positive","negative","neutral"], answer: "neutral" },
];

export default function ExerciseQuiz({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false); // Celebration trigger

  const handleAnswer = (choice) => {
    setSelected(choice);
    const correct = choice === quizQuestions[currentIndex].answer;

    if (correct) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(false);

      if (currentIndex + 1 < quizQuestions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // include last answer in score
        const finalScore = score + (correct ? 1 : 0);
        onNext(finalScore, quizQuestions.length);
      }
    }, 1200);
  };

  return (
    <div className="text-center max-w-2xl relative p-6">
      {/* Celebration */}
      <Celebration trigger={isCorrect} duration={2000} />

      <h2 className="text-3xl font-bold mb-6">Quiz Time 📝</h2>
      <p className="text-xl mb-6">{quizQuestions[currentIndex].question}</p>

      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        {quizQuestions[currentIndex].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className={`px-6 py-4 text-2xl rounded-xl font-bold transition transform hover:scale-105 ${
              selected === opt ? "bg-purple-400 text-white" : "bg-purple-200"
            }`}
          >
            {opt === "positive" ? "😊" : opt === "negative" ? "😢" : "😐"} {opt}
          </button>
        ))}
      </div>

      {selected && (
        <p className="text-2xl">
          {selected === quizQuestions[currentIndex].answer ? "✅ Correct!" : "❌ Try again!"}
        </p>
      )}
    </div>
  );
}
