#!/usr/bin/env node

import { getName } from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
    const answers = {
        yes: 'yes',
        no: 'no',
    };
    const name = getName();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.round(Math.random() * 20);
        const correctAnswer = isEven(randomNumber) ? answers.yes : answers.no;
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(
                `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
            );
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
    return;
};

brainEven();
