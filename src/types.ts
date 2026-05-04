export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple-choice',
  FILL_IN = 'fill-in',
  TRUE_FALSE = 'true-false'
}

export interface Question {
  id: number;
  type: QuestionType;
  title: string;
  options?: string[]; // Only for multiple choice
  answer: string;
  explanation: string;
  source: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: Record<number, string>;
  isFinished: boolean;
  startTime: number;
  endTime?: number;
  mistakes: number[]; // IDs of incorrect questions
}
