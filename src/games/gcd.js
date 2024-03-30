import { generateRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};
const generateRandomNumPair = () => `${generateRandomNum(10)} ${generateRandomNum(10)}`;
const getCorrectAnswer = (numberPair) => {
  const [first, second] = numberPair.split(' ').map(Number);
  const gcd = calculateGCD(first, second);
  return gcd.toString();
};
const gcd = () => {
  startGame(rules, generateRandomNumPair, getCorrectAnswer);
};
export default gcd;
