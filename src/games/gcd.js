import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (a, b) => {
  if (!b) {
    return a;
  }
  return getGreatestDivisor(b, a % b);
};

const getQuestionAndCorrectAnswer = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  return {
    correctAnswer: String(getGreatestDivisor(num1, num2)),
    question: `${num1} ${num2}`,
  };
};

const runGameGcd = () => {
  startGame(description, getQuestionAndCorrectAnswer);
};

export default runGameGcd;
