import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const getRandomNumArr = (firstNum, step, arrLength) => {
  const numArr = [];
  numArr.push(firstNum);
  for (let i = 1; i < arrLength; i += 1) {
    const previousNum = numArr[i - 1];
    numArr.push(previousNum + step);
  }
  return numArr;
};

const getTaskAndAnswer = () => {
  const randomFirstNum = getRandomNum(1, 100);
  const randomStep = getRandomNum(1, 5);
  const randomLength = getRandomNum(5, 10);
  const randomEmpty = getRandomNum(0, randomLength - 1);
  const numArr = getRandomNumArr(randomFirstNum, randomStep, randomLength);
  const correctAnswer = (numArr[randomEmpty]).toString();
  numArr[randomEmpty] = '..';
  const question = numArr.join(' ');
  return [question, correctAnswer];
};

const startProgression = () => startGame(rules, getTaskAndAnswer);

export default startProgression;
