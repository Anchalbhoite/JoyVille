import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import cheerSound from "../assets/cheers.mp3"; // Your cheer sound

const Celebration = ({ trigger = false, duration = 2000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);

      // Play cheer sound
      const audio = new Audio(cheerSound);
      audio.volume = 0.5; // Adjust volume
      audio.play();

      // Stop confetti after duration
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  return show ? <Confetti numberOfPieces={200} recycle={false} /> : null;
};

export default Celebration;
