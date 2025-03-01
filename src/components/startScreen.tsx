// components/StartScreen.tsx
import React from "react";
import img from "../assets/shuga.jpg";
interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <img src={img} alt="Quiz App" className="start-screen-image" />
      <h1 className="start-screen-title">Welcome Shuga!</h1>
      <button className="start-screen-button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
