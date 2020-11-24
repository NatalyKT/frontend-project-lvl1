import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getDivisor = (a, b) => {
  if (!b) {
    return a;
  }
  return getDivisor(b, a % b);
};

const getParameters = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  return {
    correctAnswer: String(getDivisor(num1, num2)),
    question: `${num1} ${num2}`,
  };
};

const runGameGcd = () => {
  startGame(description, getParameters);
};

export default runGameGcd;
