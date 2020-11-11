import readlineSync from 'readline-sync';

const getRandomInRange = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

// Моё решение задачи isPrime на Hexlet:
// https://ru.hexlet.io/courses/introduction_to_programming/lessons/mutators/exercise_unit

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

const randomIsPrime = () => {
  const num = getRandomInRange(); // Можно min и max указать в этом интервале
  return {
    correctAnswer: isPrime(num) ? 'yes' : 'no',
    question: String(num),
  };
};

const startGame = (randomIsPrime) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Повторяется в каждой игре - можно вынести в отдельную переменную
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const { correctAnswer, question } = randomIsPrime();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const gameIsPrime = () => {
  startGame(randomIsPrime);
};

export default gameIsPrime;
