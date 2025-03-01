export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  answers: string[];
  score: number;
  showResult: boolean;
  timer: number;
  quizStarted: boolean;
}
