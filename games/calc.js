import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();
  console.log('What is the result of the expression?');
  let rounds = 0;
  const operators = ['+', '-', '*'];
  do {
    const randomIndex = getRandomNum(0, 2);
    const randomNumOne = getRandomNum(1, 10);
    const randomNumTwo = getRandomNum(1, 10);
    let result;
    switch (operators[randomIndex]) {
      case '+':
        console.log(`Question: ${randomNumOne} + ${randomNumTwo}`);
        result = randomNumOne + randomNumTwo;
        break;
      case '-':
        console.log(`Question: ${randomNumOne} - ${randomNumTwo}`);
        result = randomNumOne - randomNumTwo;
        break;
      case '*':
        console.log(`Question: ${randomNumOne} * ${randomNumTwo}`);
        result = randomNumOne * randomNumTwo;
        break;
      default:
    }
    const answer = readlineSync.question('Your Answer: ');
    const isCorrectAnswer = result === Number(answer);
    if (isCorrectAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else if (!isCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }
  } while (rounds < 3);
  victoryCondition(rounds, userName);
};

export default startGame;
