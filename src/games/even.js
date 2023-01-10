import { getRandomNum } from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getTaskAndAnswerCommon = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEven = () => startGame(rules, getTaskAndAnswerCommon);

export default startEven;
