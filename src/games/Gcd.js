import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

// Подсказка: https://ru.hexlet.io/topics/6430 (ответ пользователя, нахождение НОД)
// Или: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-8.php
// StackOverflow https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor (еще варианты)

const description = 'Find the greatest common divisor of given numbers.';

const getDivisor = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const runCalculations = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  return {
    correctAnswer: String(getDivisor(num1, num2)),
    question: `${num1} ${num2}`,
  };
};

const gameGcd = () => {
  startGame(description, runCalculations);
};

export default gameGcd;
