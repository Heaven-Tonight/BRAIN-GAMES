import { generateRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');
const prime = () => {
  startGame(rules, generateRandomNum, getCorrectAnswer);
};
export default prime;
