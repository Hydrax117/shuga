// components/Quiz.tsx
import React from "react";
import { useQuiz } from "../hooks/useQuiz";
import Question from "./questions";
import Result from "./results";
import StartScreen from "./startScreen";

const Quiz: React.FC = () => {
  const {
    state,
    questions,
    handleAnswer,
    startQuiz,
    restartQuiz,
    handleNextQuestion,
    handlePreviousQuestion,
    jumpToQuestion,
    handleSubmit,
  } = useQuiz();

  if (!state.quizStarted) {
    return <StartScreen onStart={startQuiz} />;
  }

  if (state.showResult) {
    return (
      <Result state={state} questions={questions} onRestart={restartQuiz} />
    );
  }

  return (
    <div className="quiz-container">
      {questions[state.currentQuestionIndex] && (
        <Question
          question={questions[state.currentQuestionIndex]}
          selectedAnswer={state.selectedAnswer}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
          onPrev={handlePreviousQuestion}
          hasPrev={state.currentQuestionIndex > 0}
          hasNext={state.currentQuestionIndex < questions.length - 1}
        />
      )}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
      <br />

      <br />
      <div className="question-navigation">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`question-tab ${
              state.answers[index] ? "attempted" : "unattempted"
            } ${state.currentQuestionIndex === index ? "active" : ""}`}
            onClick={() => jumpToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
