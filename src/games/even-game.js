import readlineSync from 'readline-sync';

const $evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => num % 2 === 0;

  let correctAnswers = 0;
  let userAnswer = '';
  let num = 0;

  const oppositeAnswer = () => (isEven(num) ? 'yes' : 'no');

  for (let i = 1; i <= 3; i += 1) {
    num = Math.floor(Math.random() * (100 - 0) + 0);
    console.log(`Question: ${num}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === 'yes' && isEven(num) === true) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (userAnswer.toLowerCase() === 'no' && isEven(num) === false) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer()}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default $evenGame;
