import readlineSync, {question} from "readline-sync";
import {gamesMap} from "./gamesMap.js";

export const startGame = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gamesMap[gameName]['rules']);
    for (let i = 0; i < 3; i += 1) {
        const question = gamesMap[gameName]['question']();
        const correctResult = gamesMap[gameName]['correct'](question);
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== correctResult) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'. Let's try again, ${name}!`)
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        console.log('Correct!');
    }
}