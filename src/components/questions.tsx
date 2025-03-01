// components/Question.tsx
import React from "react";
import { question } from "../types/Question";

interface QuestionProps {
  question: question;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  questionNumber: number; // Add questionNumber prop
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
  questionNumber, // Destructure questionNumber
}) => {
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="question-container">
      <h3 className="question-number">Question {questionNumber}</h3>{" "}
      {/* Display question number */}
      <h2 className="question-text">{question.question}</h2>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index} className="option-item">
            <button
              className={`option-button ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => onAnswer(option)}
            >
              <span className="option-label">{optionLabels[index]}.</span>{" "}
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={onPrev} disabled={!hasPrev}>
          Previous
        </button>
        <button className="nav-button" onClick={onNext} disabled={!hasNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
