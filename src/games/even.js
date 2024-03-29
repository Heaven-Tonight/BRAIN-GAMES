import { generateRandomNum } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export default {
  question: generateRandomNum,
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  correct: (question) => getAnswer(question),
};
