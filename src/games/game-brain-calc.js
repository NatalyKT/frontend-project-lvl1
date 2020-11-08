import readlineSync from 'readline-sync';

const mathSign = ['+', '-', '*'];
const getRandomInRange = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

// Общая идея взята здесь: https://www.programiz.com/javascript/examples/simple-calculator

const calculateData = (num1, randomMathSign, num2) => {
  if (randomMathSign === '+') {
    return num1 + num2;
  } if (randomMathSign === '-') {
    return num1 - num2;
  } if (randomMathSign === '*') {
    return num1 * num2;
  }
  return 'error';
};

const gameCalculator = () => {
  const num1 = getRandomInRange(); // Можно min и max указать в этом интервале
  const num2 = getRandomInRange();// Можно min и max указать в этом интервале
  const randomMathSign = mathSign[getRandomInRange(1, mathSign.length) - 1];
  console.log(randomMathSign);
  // По тому же принципу, что и в game-brain-even.js (стр. 8-11)
  return {
    correctAnswer: String(calculateData(num1, randomMathSign, num2)),
    question: `${num1} ${randomMathSign} ${num2}`, // Это называется ИНТЕРПОЛЯЦИЯ!!!
  };
};

const startGame = (gameCalculator) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  for (let round = 1; round <= 3; round += 1) {
    const { correctAnswer, question } = gameCalculator();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const gameCalc = () => {
  startGame(gameCalculator);
};

export default gameCalc;
