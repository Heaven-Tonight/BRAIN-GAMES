export const generateRandomNum = (max = 50, min = 0) => {
  const randomNum = (Math.random() * (max - min) + min);
  return Math.floor(randomNum);
};

export const generateRandomMathExpression = () => {
  const operands = ['+', '-', '*'];
  const num1 = generateRandomNum(20);
  const num2 = generateRandomNum(10);
  const randomIndex = generateRandomNum(3);
  return `${num1} ${operands[randomIndex]} ${num2}`;
};

export const generateRandomNumPair = () => `${generateRandomNum(10)} ${generateRandomNum(10)}`;

export const generateRandomMathProgression = () => {
  const result = [];
  const replacer = '..';
  let maxLength = 10;
  let start = generateRandomNum(10, 1);
  const step = generateRandomNum(5, 2);
  while (maxLength > 0) {
    result.push(start);
    start += step;
    maxLength -= 1;
  }
  const randomIdx = generateRandomNum(result.length, 1);
  return result.map((num, i) => (i === randomIdx ? replacer : num)).join(' ');
};
