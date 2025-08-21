import { useState } from "react";
import Celebration from "./Celebration";

export default function SentimentExplorer({ onNext }) {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const positiveWords = ["happy","love","great","awesome","good","fantastic","nice"];
  const negativeWords = ["sad","hate","bad","terrible","angry","horrible"];

  const analyzeSentiment = () => {
    if (!text.trim()) return;

    let lowerText = text.toLowerCase();
    let scoreVal = 0;
    positiveWords.forEach(w => lowerText.includes(w) && scoreVal++);
    negativeWords.forEach(w => lowerText.includes(w) && scoreVal--);

    let result = "neutral";
    if (scoreVal > 0) result = "positive";
    else if (scoreVal < 0) result = "negative";

    setSentiment(result);

    // Trigger celebration for positive sentences
    if (result === "positive") setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2000);
  };

  const getEmoji = () => sentiment === "positive" ? "😊" : sentiment === "negative" ? "😢" : "😐";

  return (
    <div className="relative flex flex-col items-center w-full p-4">
      <Celebration trigger={showCelebration} />
      <h1 className="text-4xl font-bold text-purple-700 mb-4 animate-pulse">
        Sentiment Explorer 🚀
      </h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your fun sentence here... 🌈✏️"
        className="w-full max-w-lg p-5 text-xl rounded-3xl border-4 border-pink-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg text-purple-800 placeholder-purple-400 bg-pink-50 resize-none transition duration-300 ease-in-out hover:bg-pink-100"
      />
      <button
        onClick={analyzeSentiment}
        className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold rounded-full shadow-md text-lg transition transform hover:scale-105"
      >
        🎯 Check Sentiment
      </button>
      {sentiment && (
        <div className="mt-6 p-4 rounded-2xl bg-purple-100 text-2xl font-bold shadow-inner flex flex-col items-center">
          Result: <span className="text-purple-700">{sentiment.toUpperCase()}</span>
          <span className="text-6xl mt-2 animate-bounce">{getEmoji()}</span>
        </div>
      )}
      <button
        onClick={onNext}
        className="mt-6 px-6 py-3 bg-green-400 hover:bg-green-500 text-white font-bold rounded-full shadow-md text-lg transition transform hover:scale-105"
      >
        Next ➡️
      </button>
    </div>
  );
}
