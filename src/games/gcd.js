import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getTaskAndAnswer = () => {
  const taskAnswer = [];
  const randomNumOne = getRandomNum(1, 100);
  const randomNumTwo = getRandomNum(1, 100);
  const taskToPush = `${randomNumOne} ${randomNumTwo}`;
  taskAnswer.push(taskToPush);
  if (randomNumOne >= randomNumTwo) {
    for (let i = randomNumTwo; i > 0; i -= 1) {
      const greatestDivisorCondition = randomNumOne % i === 0 && randomNumTwo % i === 0;
      if (greatestDivisorCondition) {
        taskAnswer[1] = i.toString();
        break;
      }
    }
  } else if (randomNumOne <= randomNumTwo) {
    for (let i = randomNumOne; i > 0; i -= 1) {
      const greatestDivisorCondition = randomNumOne % i === 0 && randomNumTwo % i === 0;
      if (greatestDivisorCondition) {
        taskAnswer[1] = i.toString();
        break;
      }
    }
  }
  return taskAnswer;
};

const startGcd = () => startGame(rules, getTaskAndAnswer);

export default startGcd;
