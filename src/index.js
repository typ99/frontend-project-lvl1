import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const ROUNDS_COUNT = 3;

export const runGame = (game, description) => {
    const name = getName();

    console.log(description);

    for (let i = 0; i < ROUNDS_COUNT; i += 1) {
        const { question, correctAnswer } = game();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(
                `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
            );
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};
