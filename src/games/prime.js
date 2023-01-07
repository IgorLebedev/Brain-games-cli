import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTaskAndAnswer = () => {
  const taskAnswer = [];
  const randomNum = getRandomNum(1, 100);
  taskAnswer.push(randomNum);
  let numOfDivisors = 0;
  for (let i = 1; i <= randomNum; i += 1) {
    if (randomNum % i === 0) {
      numOfDivisors += 1;
    }
  }
  if (numOfDivisors === 2) {
    taskAnswer.push('yes');
  } else taskAnswer.push('no');
  return taskAnswer;
};

const startPrime = () => startGame(rules, getTaskAndAnswer);

export default startPrime;
