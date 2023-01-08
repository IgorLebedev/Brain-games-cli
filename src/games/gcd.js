import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  for (let i = Math.min(a, b); i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return null;
};

const getTaskAndAnswer = () => {
  const taskAnswer = [];
  const randomNumOne = getRandomNum(1, 100);
  const randomNumTwo = getRandomNum(1, 100);
  taskAnswer.push(`${randomNumOne} ${randomNumTwo}`);
  taskAnswer[1] = (getGcd(randomNumOne, randomNumTwo)).toString();
  return taskAnswer;
};

const startGcd = () => startGame(rules, getTaskAndAnswer);

export default startGcd;
