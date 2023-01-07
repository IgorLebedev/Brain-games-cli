import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const getTaskAndAnswer = () => {
  const taskAnswer = [];
  const randomFirstNum = getRandomNum(1, 100);
  const randomStep = getRandomNum(1, 5);
  const randomLength = getRandomNum(5, 10);
  const randomEmpty = getRandomNum(0, randomLength - 1);
  const numArr = [];
  for (let i = 0; i < randomLength; i += 1) {
    if (numArr.length === 0) {
      numArr.push(randomFirstNum);
    } else numArr.push(numArr[i - 1] + randomStep);
  }
  taskAnswer[1] = (numArr[randomEmpty]).toString();
  numArr[randomEmpty] = '..';
  const result = numArr.join(' ');
  taskAnswer[0] = result;
  return taskAnswer;
};

const startProgression = () => startGame(rules, getTaskAndAnswer);

export default startProgression;
