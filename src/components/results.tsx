// components/Result.tsx
import React from "react";
import { QuizState } from "../types/QuizState";

interface ResultProps {
  state: QuizState;
  questions: any[];
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ state, questions, onRestart }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>
        Your Score: {state.score} / {questions.length}
      </p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
