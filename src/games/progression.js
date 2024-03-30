import { generateRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const generateRandomMathProgression = (length = 10) => {
  const progression = [];
  const replacer = '..';

  const start = generateRandomNum(10, 1);
  const step = generateRandomNum(5, 2);

  for (let i = 0; i < length; i += 1) {
    const stepSize = i * step;
    progression.push(start + stepSize);
  }
  const randomIdx = generateRandomNum(length, 1);
  progression[randomIdx] = replacer;
  return progression.join(' ');
};
const getMissedProgressionItem = (progression) => {
  const replacer = '..';
  const values = progression.split(' ');
  const missedNumIdx = values.indexOf(replacer);
  if (missedNumIdx === 1) {
    const next1 = Number(values[missedNumIdx + 1]);
    const next2 = Number(values[missedNumIdx + 2]);
    const step = next2 - next1;
    return (next1 - step).toString();
  }
  const prev1 = Number(values[missedNumIdx - 1]);
  const prev2 = Number(values[missedNumIdx - 2]);
  const step = prev1 - prev2;
  return (prev1 + step).toString();
};

const progression = () => {
  startGame(rules, generateRandomMathProgression, getMissedProgressionItem);
};

export default progression;
