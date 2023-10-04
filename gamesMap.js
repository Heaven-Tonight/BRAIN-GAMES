import {generateRandomNum} from "./src/functions/generate.js";
import {isEvenNum} from "./src/functions/check.js";

export const gamesMap = {
    even: {
        question: generateRandomNum,
        rules: 'Answer "yes" if the number is even, otherwise answer "no".',
        correct: (question) => isEvenNum(question),
    }
};




