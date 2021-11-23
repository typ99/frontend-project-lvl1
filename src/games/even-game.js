import getRandomNum from '../randomNum.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const $evenGame = () => {
  const question = getRandomNum(0, 100) + 1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { rule, $evenGame };
