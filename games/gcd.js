import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();
  console.log('Find the greatest common divisor of given numbers.');
  let rounds = 0;
  do {
    const randomNumOne = getRandomNum(100);
    const randomNumTwo = getRandomNum(100);
    let result;
    if (randomNumOne > randomNumTwo) {
      for (let i = randomNumTwo; i > 0; i -= 1) {
        const greatestDivisorCondition = randomNumOne % i === 0 && randomNumTwo % i === 0;
        if (greatestDivisorCondition) {
          result = i;
          break;
        }
      }
    } else if (randomNumOne < randomNumTwo) {
      for (let i = randomNumOne; i > 0; i -= 1) {
        const greatestDivisorCondition = randomNumOne % i === 0 && randomNumTwo % i === 0;
        if (greatestDivisorCondition) {
          result = i;
          break;
        }
      }
    } else if (randomNumOne === randomNumTwo) {
      result = randomNumOne;
    }
    console.log(`Question: ${randomNumOne} ${randomNumTwo}`);
    const answer = readlineSync.question('Your Answer: ');
    const isCorrectAnswer = result === Number(answer);
    if (isCorrectAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else if (!isCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again ${userName}!`);
      break;
    }
  } while (rounds < 3);
  victoryCondition(rounds, userName);
};

export default startGame;
