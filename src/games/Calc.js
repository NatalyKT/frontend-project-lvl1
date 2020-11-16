import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const mathSigns = ['+', '-', '*'];

const description = 'What is the result of the expression?';

// Общая идея взята здесь: https://www.programiz.com/javascript/examples/simple-calculator

const calculate = (num1, randomMathSign, num2) => {
  if (randomMathSign === '+') {
    return num1 + num2;
  } if (randomMathSign === '-') {
    return num1 - num2;
  } if (randomMathSign === '*') {
    return num1 * num2;
  }
  // Конструктор для стандартных ошибок: https://learn.javascript.ru/exception
  throw new Error('Unexpected operation');
};

const specificGameTasks = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const randomMathSign = mathSigns[getRandomInRange(1, mathSigns.length) - 1];
  console.log(randomMathSign);
  return {
    correctAnswer: String(calculate(num1, randomMathSign, num2)),
    question: `${num1} ${randomMathSign} ${num2}`,
  };
};

const gameCalc = () => {
  startGame(description, specificGameTasks);
};

export default gameCalc;