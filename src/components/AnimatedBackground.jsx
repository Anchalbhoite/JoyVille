// src/components/AnimatedBackground.jsx
import "../AnimatedBackground.css"; // We'll add animation CSS here

const animals = ["🐶", "🐱", "🦊", "🐼", "🐨", "🐸", "🦁", "🐰", "🐵","✨","💕","🦄","🐬","🐚"];

export default function AnimatedBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {animals.map((animal, idx) => (
        <span
          key={idx}
          className={`animal animal-${idx}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
            fontSize: `${20 + Math.random() * 40}px`,
          }}
        >
          {animal}
        </span>
      ))}
    </div>
  );
}
