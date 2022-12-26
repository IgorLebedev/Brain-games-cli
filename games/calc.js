import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();

  console.log('What is the result of the expression?');

  let rounds = 0;
  const operators = ['+', '-', '*'];
  do {
    const randomIndex = getRandomNum(2);
    const randomNumOne = getRandomNum(10);
    const randomNumTwo = getRandomNum(10);
    let result;
    switch (operators[randomIndex]) {
      case '+':
        console.log(`Question: ${randomNumOne.toString()} + ${randomNumTwo.toString()}`);
        result = randomNumOne + randomNumTwo;
        break;
      case '-':
        console.log(`Question: ${randomNumOne.toString()} - ${randomNumTwo.toString()}`);
        result = randomNumOne - randomNumTwo;
        break;
      case '*':
        console.log(`Question: ${randomNumOne.toString()} * ${randomNumTwo.toString()}`);
        result = randomNumOne * randomNumTwo;
        break;
      default:
    }
    const answer = readlineSync.question('Your Answer: ');
    const correctAnswr = result === Number(answer);
    if (correctAnswr) {
      console.log('Correct!');
      rounds += 1;
    } else if (!correctAnswr) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again ${userName}`);
      break;
    }
  } while (rounds < 3);
  victoryCondition(rounds, userName);
};

export default startGame;
