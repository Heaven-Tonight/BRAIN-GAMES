import { generateRandomNum } from '../utils.js';

const generateRandomNumPair = () => `${generateRandomNum(10)} ${generateRandomNum(10)}`;

const getGCD = (numberPair) => {
  const [first, second] = numberPair.split(' ').map(Number);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  return gcd(first, second).toString();
};

export default {
  question: generateRandomNumPair,
  rules: 'Find the greatest common divisor of given numbers.',
  correct: (question) => getGCD(question),
};
