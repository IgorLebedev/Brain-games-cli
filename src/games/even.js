import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getTaskAndAnswer = () => {
  const randomNum = getRandomNum(1, 100);
  const question = randomNum;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEven = () => startGame(rules, getTaskAndAnswer);

export default startEven;
