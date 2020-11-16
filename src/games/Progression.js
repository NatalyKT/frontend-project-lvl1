import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

// Хорошее объяснение алгоритма нахождения (на примере С++; в т.ч. бинарный поиск):
// https://www.geeksforgeeks.org/find-missing-number-arithmetic-progression/?ref=rp
// StackOverflow (много): https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence

const description = 'What number is missing in the progression?';

const randomProgression = (firstNum, step, maxLength) => {
  const progression = [];

  for (let i = 0; i < maxLength; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const specificGameTasks = () => {
  // По аналогии с др.частями игры (рандом)
  const firstNumber = getRandomInRange(1, 10);
  const progressionStep = getRandomInRange(1, 10);
  const progressionLength = 5;
  const unknownNumber = getRandomInRange(0, progressionLength - 1);
  const progression = randomProgression(firstNumber, progressionStep, progressionLength);

  const correctAnswer = `${progression[unknownNumber]}`;
  // const correctAnswer = String(progression[unknownNumber]);
  progression[unknownNumber] = '..';
  return {
    correctAnswer,
    question: progression.join(' '),
  };
};

const gameProgression = () => {
  startGame(description, specificGameTasks);
};

export default gameProgression;
