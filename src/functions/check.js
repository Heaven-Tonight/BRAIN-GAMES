export const isEvenNum = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const isPrimeNum = (number) => {
  const primeNumsFrom1To50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  return primeNumsFrom1To50.includes(number) ? 'yes' : 'no';
};

export const getMathExpressionResult = (mathExpression) => {
  const values = mathExpression.split(' ');
  const first = Number(values[0]);
  const second = Number(values[2]);
  const operand = values[1];
  switch (operand) {
    case '+':
      return (first + second).toString();
    case '*':
      return (first * second).toString();
    case '-':
      return (first - second).toString();
    default: return `Unknown operand value - ${operand}`;
  }
};

export const getGCD = (mathExpression) => {
  const values = mathExpression.split(' ');
  let a = Number(values[0]);
  let b = Number(values[1]);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b).toString();
};

export const getMissedProgressionNum = (progression) => {
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
