const isEven = (number) => number % 2 === 0;

export const evenGame = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    return {
        question: randomNumber,
        correctAnswer,
    };
};
