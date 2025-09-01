import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import ExerciseDragDrop from "./components/ExerciseDragDrop";
import ExerciseQuiz from "./components/ExerciseQuiz";
import ResultScreen from "./components/ResultScreen";
import StoryActivity from "./components/StoryActivity";
import AnimatedBackground from "./components/AnimatedBackground";
import MiniGames from "./Minigame/MiniGames";
import FruitColoring from "./Minigame/FruitColoring";

import kidMusic from "./assets/kid.mp3";

export default function App() {
  const [step, setStep] = useState(1); // start at 1 when inside quiz
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay was prevented:", error);
        });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMuted) audioRef.current.play();
    else audioRef.current.pause();
    setIsMuted(!isMuted);
  };

  const handleNext = (newScore, totalQuestions) => {
    setScore(newScore);
    setTotal(totalQuestions);
    setStep(step + 1);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <AnimatedBackground />

      {/* Background Music */}
      <audio ref={audioRef} src={kidMusic} loop autoPlay />

      {/* Music Toggle */}
      <button onClick={toggleMusic} className="music-button">
        {isMuted ? "🔇" : "🔊"}
        
      </button>

      <div className="app-container relative w-full max-w-3xl p-6 bg-white bg-opacity-90 rounded-3xl shadow-2xl flex flex-col items-center text-center z-10">
        <Routes>
          {/* Intro Page */}
          <Route path="/" element={<IntroScreen />} />

          {/* Quiz Adventure Flow */}
          <Route
            path="/quiz"
            element={
              <>
                {step === 1 && <ExerciseDragDrop onNext={(s) => handleNext(s, 3)} />}
                {step === 2 && <ExerciseQuiz onNext={(s) => handleNext(s, 5)} />}
                {step === 3 && <StoryActivity onNext={() => setStep(4)} />}
                {step === 4 && (
                  <ResultScreen
                    score={score}
                    total={total}
                    onRestart={() => setStep(1)} // restart adventure
                  />
                )}
              </>
            }
          />

          {/* Mini Games Hub + Coloring */}
            <Route path="/minigames" element={<MiniGames />} />
            <Route path="/minigames/fruit-coloring" element={<FruitColoring />} />

        </Routes>
      </div>
    </div>
  );
}
