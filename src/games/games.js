import {
  generateRandomMathProgression,
  generateRandomMathExpression,
  generateRandomNum,
  generateRandomNumPair,
} from '../functions/generate.js';
import {
  getMissedProgressionNum,
  getGCD,
  getMathExpressionResult,
  isEvenNum,
  isPrimeNum,
} from '../functions/check.js';

const games = {
  even: {
    question: generateRandomNum,
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    correct: (question) => isEvenNum(question),
  },

  calc: {
    question: generateRandomMathExpression,
    rules: 'What is the result of the expression?',
    correct: (question) => getMathExpressionResult(question),
  },

  gcd: {
    question: generateRandomNumPair,
    rules: 'Find the greatest common divisor of given numbers.',
    correct: (question) => getGCD(question),
  },

  progression: {
    question: generateRandomMathProgression,
    rules: 'What number is missing in the progression?',
    correct: (question) => getMissedProgressionNum(question),
  },

  prime: {
    question: generateRandomNum,
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    correct: (question) => isPrimeNum(question),
  },
};

export default games;
