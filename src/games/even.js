import { generateRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (question) => (isEven(Number(question)) ? 'yes' : 'no');
const even = () => {
  startGame(rules, generateRandomNum, getCorrectAnswer);
};
export default even;
