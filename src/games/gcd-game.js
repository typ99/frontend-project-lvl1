import getRandomNum from '../randomNum.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const $gcdGame = () => {
  const a = getRandomNum(0, 100) + 1;
  const b = getRandomNum(0, 100) + 1;
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();

  return [question, correctAnswer];
};

export { rule, $gcdGame };
