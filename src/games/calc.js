import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const getResult = (operator, firstNum, SecondNum) => {
  switch (operator) {
    case '+':
      return ((firstNum + SecondNum).toString());
    case '-':
      return ((firstNum - SecondNum).toString());
    case '*':
      return ((firstNum * SecondNum).toString());
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getTaskAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNum(0, operators.length - 1);
  const randomNumOne = getRandomNum(1, 10);
  const randomNumTwo = getRandomNum(1, 10);
  const operator = operators[randomIndex];
  const question = `${randomNumOne} ${operator} ${randomNumTwo}`;
  const correctAnswer = getResult(operator, randomNumOne, randomNumTwo);
  return [question, correctAnswer];
};

const startCalc = () => startGame(rules, getTaskAndAnswer);

export default startCalc;
