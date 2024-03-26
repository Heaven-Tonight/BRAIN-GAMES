import readlineSync from 'readline-sync';
import games from './games/index.js';

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(games[gameName].rules);

  const attemptsCount = 3;
  let correctAnswersCount = 0;

  for (let i = 0; i < attemptsCount; i += 1) {
    const { question, correct } = games[gameName];
    const currentQuestion = question();
    const correctResult = correct(currentQuestion);

    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctResult) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
  }
  if (correctAnswersCount === attemptsCount) {
    console.log(`Congratulations, ${name}! You've won!`);
  }
};
export const even = () => startGame('even');
export const calc = () => startGame('calc');
export const gcd = () => startGame('gcd');
export const progression = () => startGame('progression');
export const prime = () => startGame('prime');
