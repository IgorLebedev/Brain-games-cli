import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const getResult = (operator, randomNumOne, randomNumTwo) => {
  switch (operator) {
    case '+':
      return ((randomNumOne + randomNumTwo).toString());
    case '-':
      return ((randomNumOne - randomNumTwo).toString());
    case '*':
      return ((randomNumOne * randomNumTwo).toString());
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getTaskAndAnswer = () => {
  let question = '';
  let correctAnswer = '';
  const operators = ['+', '-', '*'];
  const lastOperatorIdx = operators.length - 1;
  const randomIndex = getRandomNum(0, lastOperatorIdx);
  const randomNumOne = getRandomNum(1, 10);
  const randomNumTwo = getRandomNum(1, 10);
  const operator = operators[randomIndex];
  question = `${randomNumOne} ${operator} ${randomNumTwo}`;
  correctAnswer = getResult(operator, randomNumOne, randomNumTwo);
  return [question, correctAnswer];
};

const startCalc = () => startGame(rules, getTaskAndAnswer);

export default startCalc;
