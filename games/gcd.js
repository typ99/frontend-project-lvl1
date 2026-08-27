const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const gcdGame = () => {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;

    return {
        question: `${a} ${b}`,
        correctAnswer: String(gcd(a, b)),
    };
};
