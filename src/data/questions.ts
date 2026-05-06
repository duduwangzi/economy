import { Question } from '../types';
import { CHOICE_QUESTIONS } from './questions_choice';
import { FILL_QUESTIONS } from './questions_fill';
import { TF_QUESTIONS } from './questions_tf';

export const QUESTIONS: Question[] = [
  ...CHOICE_QUESTIONS,
  ...FILL_QUESTIONS.map(q => ({ ...q, id: q.id + 1000 })),
  ...TF_QUESTIONS.map(q => ({ ...q, id: q.id + 2000 }))
];
