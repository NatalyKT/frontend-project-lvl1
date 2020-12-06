import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const num = getRandomInRange(1, 100);
  return {
    correctAnswer: isPrime(num) ? 'yes' : 'no',
    question: String(num),
  };
};

const runGamePrime = () => {
  startGame(description, getQuestionAndCorrectAnswer);
};

export default runGamePrime;
