// hooks/useQuiz.ts
import { useState } from "react";
import { question } from "../types/Question";
import { QuizState } from "../types/QuizState";
import questionsData from "../data/questions.json";

export const useQuiz = () => {
  const questions: question[] = questionsData;
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    answers: Array(questions.length).fill(null), // Initialize answers array
    score: 0,
    showResult: false,
    quizStarted: false,
  });

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...state.answers];
    updatedAnswers[state.currentQuestionIndex] = answer;
    setState((prevState) => ({
      ...prevState,
      selectedAnswer: answer,
      answers: updatedAnswers,
    }));
  };

  const startQuiz = () => {
    setState((prevState) => ({ ...prevState, quizStarted: true }));
  };

  const restartQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answers: Array(questions.length).fill(null),
      score: 0,
      showResult: false,
      quizStarted: false,
    });
  };

  const handleNextQuestion = () => {
    if (state.currentQuestionIndex < questions.length - 1) {
      setState((prevState) => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        selectedAnswer:
          prevState.answers[prevState.currentQuestionIndex + 1] || null,
      }));
    }
  };

  const handlePreviousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setState((prevState) => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex - 1,
        selectedAnswer:
          prevState.answers[prevState.currentQuestionIndex - 1] || null,
      }));
    }
  };

  const jumpToQuestion = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      currentQuestionIndex: index,
      selectedAnswer: prevState.answers[index] || null,
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    state.answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    setState((prevState) => ({ ...prevState, showResult: true, score }));
  };

  return {
    state,
    questions,
    handleAnswer,
    startQuiz,
    restartQuiz,
    handleNextQuestion,
    handlePreviousQuestion,
    jumpToQuestion,
    handleSubmit,
  };
};
