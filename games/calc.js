export const calcGame = () => {
    const a = Math.floor(Math.random() * 50) + 1;
    const b = Math.floor(Math.random() * 50) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = a + b;
            break;
        case '-':
            correctAnswer = a - b;
            break;
        case '*':
            correctAnswer = a * b;
            break;
        default:
            break;
    }

    return {
        question: `${a} ${operator} ${b}`,
        correctAnswer: String(correctAnswer),
    };
};
