import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const getTaskAndAnswer = () => {
  const taskAnswer = [];
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNum(0, 2);
  const randomNumOne = getRandomNum(1, 10);
  const randomNumTwo = getRandomNum(1, 10);
  const operator = operators[randomIndex];
  taskAnswer.push(`${randomNumOne} ${operator} ${randomNumTwo}`);
  switch (operator) {
    case '+':
      taskAnswer.push((randomNumOne + randomNumTwo).toString());
      break;
    case '-':
      taskAnswer.push((randomNumOne - randomNumTwo).toString());
      break;
    case '*':
      taskAnswer.push((randomNumOne * randomNumTwo).toString());
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return taskAnswer;
};

const startCalc = () => startGame(rules, getTaskAndAnswer);

export default startCalc;
