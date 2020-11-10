import readlineSync from 'readline-sync';

const getRandomInRange = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

// Подсказка: https://ru.hexlet.io/topics/6430 (ответ пользователя, нахождение НОД)
// Или: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-8.php
// StackOverflow https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor (еще варианты)

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

const greatestDivisor = () => {
  // По аналогии с game-brain-calc.js
  const num1 = getRandomInRange(); // Можно min и max указать в этом интервале
  const num2 = getRandomInRange();// Можно min и max указать в этом интервале
  return {
    correctAnswer: String(getDivisor(num1, num2)),
    question: `${num1} ${num2}`,
  };
};

const startGame = (greatestDivisor) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Повторяется в каждой игре - можно вынести в отдельную переменную
  console.log('Find the greatest common divisor of given numbers.');

  for (let round = 1; round <= 3; round += 1) {
    const { correctAnswer, question } = greatestDivisor();
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

const gameGcd = () => {
  startGame(greatestDivisor);
};

export default gameGcd;
