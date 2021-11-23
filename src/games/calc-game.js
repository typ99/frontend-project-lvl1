import getRandomNum from '../randomNum.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = (a + b);
  } else if (operator === '-') {
    result = (a - b);
  } else if (operator === '*') {
    result = (a * b);
  }

  return result;
};

const $calcGame = () => {
  const a = getRandomNum(0, 100) + 1;
  const b = getRandomNum(0, 100) + 1;
  const operator = operators[getRandomNum(0, operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = (calc(a, b, operator)).toString();

  return [question, correctAnswer];
};

export { rule, $calcGame };
