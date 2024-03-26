import generateRandomNum from '../utils.js';

const generateNumPossiblyPrime = generateRandomNum;
const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  if (number === 2 || number === 3) {
    return 'yes';
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return 'no';
  }

  for (let i = 5; i <= Math.sqrt(number); i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default {
  question: generateNumPossiblyPrime,
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  correct: (question) => isPrime(question),
};
