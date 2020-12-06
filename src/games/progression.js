import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const progressionLength = 5;

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomInRange(1, 10);
  const progressionStep = getRandomInRange(1, 10);
  const unknownNumber = getRandomInRange(0, progressionLength - 1);
  const progression = getProgression(firstNumber, progressionStep, progressionLength);

  const correctAnswer = String(progression[unknownNumber]);
  progression[unknownNumber] = '..';
  return {
    correctAnswer,
    question: progression.join(' '),
  };
};

const runGameProgression = () => {
  startGame(description, getQuestionAndCorrectAnswer);
};

export default runGameProgression;
