import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Моё решение задачи isPrime на Hexlet:
// https://ru.hexlet.io/courses/introduction_to_programming/lessons/mutators/exercise_unit

const calcIsPrime = (number) => {
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

const calcExpression = () => {
  const num = getRandomInRange(1, 100);
  return {
    correctAnswer: calcIsPrime(num) ? 'yes' : 'no',
    question: String(num),
  };
};

const runGameIsPrime = () => {
  startGame(description, calcExpression);
};

export default runGameIsPrime;
