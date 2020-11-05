import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0);
const getRandomInRange = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateNumbers = () => {
  const questionToUser = getRandomInRange();
  return {
    correctAnswer: isEven(questionToUser) ? 'yes' : 'no',
    question: String(questionToUser),
  };
};

const startGame = (generateNumbers) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const { correctAnswer, question } = generateNumbers();
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

const gameEven = () => {
  startGame(generateNumbers);
};

export default gameEven;
