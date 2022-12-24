import readlineSync from 'readline-sync';
import { sayHelloAndGetName } from '../src/index.js';

const brainCalc = () => {
  const userName = sayHelloAndGetName();

  console.log('What is the result of the expression?');

  let rounds = 0;
  const operators = ['+', '-', '*'];
  do {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomNumOne = Math.round(Math.random() * 10);
    const randomNumTwo = Math.round(Math.random() * 10);
    let resultRandom;
    switch (operators[randomIndex]) {
      case '+':
        console.log(`Question: ${randomNumOne.toString()} + ${randomNumTwo.toString()}`);
        resultRandom = randomNumOne + randomNumTwo;
        break;
      case '-':
        console.log(`Question: ${randomNumOne.toString()} - ${randomNumTwo.toString()}`);
        resultRandom = randomNumOne - randomNumTwo;
        break;
      case '*':
        console.log(`Question: ${randomNumOne.toString()} * ${randomNumTwo.toString()}`);
        resultRandom = randomNumOne * randomNumTwo;
        break;
      default:
    }
    const answer = readlineSync.question('Your Answer: ');
    const correctAnswr = resultRandom === Number(answer);
    if (correctAnswr) {
      console.log('Correct!');
      rounds += 1;
    } else if (!correctAnswr) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultRandom}'.\nLet's try again ${userName}`);
      break;
    }
  } while (rounds < 3);
  if (rounds === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default brainCalc;
