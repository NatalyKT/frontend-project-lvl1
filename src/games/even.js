import getRandomInRange from '../getRandomInRange.js';
import startGame from '../index.js';

const isEven = (num) => (num % 2 === 0);
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const questionToUser = getRandomInRange(1, 100);
  return {
    correctAnswer: isEven(questionToUser) ? 'yes' : 'no',
    question: String(questionToUser),
  };
};

const runGameEven = () => {
  startGame(description, getQuestionAndCorrectAnswer);
};

export default runGameEven;
