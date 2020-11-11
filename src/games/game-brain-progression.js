import readlineSync from 'readline-sync';

const getRandomInRange = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

// Хорошее объяснение алгоритма нахождения (на примере С++; в т.ч. бинарный поиск):
// https://www.geeksforgeeks.org/find-missing-number-arithmetic-progression/?ref=rp
// StackOverflow (много): https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence

const randomProgression = (firstNum, step, maxLength) => {
  const progression = [];

  for (let i = 0; i < maxLength; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const missingElement = () => {
  // По аналогии с др.частями игры (рандом)
  const firstNumber = getRandomInRange(); // Можно min и max указать в этом интервале
  const progressionStep = getRandomInRange();// Можно min и max указать в этом интервале
  const progressionLength = 5;
  const unknownNumber = getRandomInRange(0, progressionLength - 1);
  const progression = randomProgression(firstNumber, progressionStep, progressionLength);
  // console.log(progression);
  const correctAnswer = `${progression[unknownNumber]}`;
  // const correctAnswer = String(progression[unknownNumber]);
  progression[unknownNumber] = '..';
  return {
    correctAnswer,
    question: progression.join(' '),
  };
};

const startGame = (missingElement) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Повторяется в каждой игре - можно вынести в отдельную переменную
  console.log('What number is missing in the progression?');

  for (let round = 1; round <= 3; round += 1) {
    const { correctAnswer, question } = missingElement();
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

const gameProgression = () => {
  startGame(missingElement);
};

export default gameProgression;
