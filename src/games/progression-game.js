import getRandomNum from '../randomNum.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  return progression;
};

const $progressionGame = () => {
  const start = getRandomNum(1, 10) + 1;
  const step = getRandomNum(2, 9) + 1;
  const length = getRandomNum(5, 10) + 1;
  const progression = generateProgression(start, step, length);
  const index = getRandomNum(0, length);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

export { rule, $progressionGame };
