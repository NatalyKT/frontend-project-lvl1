import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

// Хорошее объяснение алгоритма нахождения (на примере С++; в т.ч. бинарный поиск):
// https://www.geeksforgeeks.org/find-missing-number-arithmetic-progression/?ref=rp
// StackOverflow (много): https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const calcExpression = () => {
  const firstNumber = getRandomInRange(1, 10);
  const progressionStep = getRandomInRange(1, 10);
  const progressionLength = 5;
  const unknownNumber = getRandomInRange(0, progressionLength - 1);
  const progression = getProgression(firstNumber, progressionStep, progressionLength);

  const correctAnswer = String(progression[unknownNumber]);
  // const correctAnswer = `${progression[unknownNumber]}`; - убираем
  progression[unknownNumber] = '..';
  return {
    correctAnswer,
    question: progression.join(' '),
  };
};

const runGameProgression = () => {
  startGame(description, calcExpression);
};

export default runGameProgression;
