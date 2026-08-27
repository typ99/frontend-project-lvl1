const makeProgression = (length, start, step) => {
    const progression = [];

    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }

    return progression;
};

export const progressionGame = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const progression = makeProgression(length, start, step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return { question, correctAnswer };
};
