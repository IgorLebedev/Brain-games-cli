import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTaskAndAnswer = () => {
  const taskAnswerArr = [];
  const randomNum = getRandomNum(1, 100);
  taskAnswerArr.push(randomNum);
  if (randomNum % 2 === 0) {
    taskAnswerArr.push('yes');
  } else {
    taskAnswerArr.push('no');
  }
  return taskAnswerArr;
};

const startEven = () => startGame(rules, getTaskAndAnswer);

export default startEven;
