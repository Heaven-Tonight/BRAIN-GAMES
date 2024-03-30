import { generateRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const generateRandomMathExpression = () => {
  const operands = ['+', '-', '*'];
  const num1 = generateRandomNum(20);
  const num2 = generateRandomNum(10);
  const randomIndex = generateRandomNum(3);
  return `${num1} ${operands[randomIndex]} ${num2}`;
};

const operations = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
};
const getCorrectMathExpressionResult = (mathExpression) => {
  const [first, operator, second] = mathExpression.split(' ');
  const result = operations?.[operator](Number(first), Number(second));
  return result.toString() ?? `Unknown operand value - ${operator}`;
};

const calc = () => {
  startGame(rules, generateRandomMathExpression, getCorrectMathExpressionResult);
};
export default calc;
