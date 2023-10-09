import readlineSync from 'readline-sync';
import games from './games.js';

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(games[gameName].rules);
  for (let i = 0; i < 3; i += 1) {
    const question = games[gameName].question();
    const correctResult = games[gameName].correct(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctResult) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'. Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
};

export default startGame;
