import readlineSync from 'readline-sync';

const attemptsCount = 3;
const startGame = (rules, generateQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < attemptsCount; i += 1) {
    const question = generateQuestion();
    const answer = getCorrectAnswer(question);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}! You've won!`);
};

export default startGame;
