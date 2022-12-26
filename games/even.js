import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rounds = 0;

  do {
    console.log(`Question: ${getRandomNum()}`);
    const answer = readlineSync.question('Your Answer: ');
    const correctAnswrYes = answer === 'yes' && getRandomNum() % 2 === 0;
    const correctAnswrNo = answer === 'no' && getRandomNum() % 2 !== 0;
    if (correctAnswrYes || correctAnswrNo) {
      console.log('Correct!');
      rounds += 1;
    } else if (!correctAnswrNo) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${userName}`);
      break;
    } else if (!correctAnswrYes) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again ${userName}`);
      break;
    }
  } while (rounds < 3);
  victoryCondition(rounds, userName);
};

export default startGame;
