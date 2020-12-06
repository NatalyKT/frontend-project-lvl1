import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const mathSigns = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calculate = (num1, randomMathSign, num2) => {
  switch (randomMathSign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unexpected operation');
  }
};

const getQuestionAndCorrectAnswer = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const randomMathSign = mathSigns[getRandomInRange(0, mathSigns.length - 1)];
  return {
    correctAnswer: String(calculate(num1, randomMathSign, num2)),
    question: `${num1} ${randomMathSign} ${num2}`,
  };
};

const runGameCalc = () => {
  startGame(description, getQuestionAndCorrectAnswer);
};

export default runGameCalc;
