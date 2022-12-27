import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let rounds = 0;
  do {
    const randomNum = getRandomNum(1, 100);
    let numOfDivisors = 0;
    for (let i = 1; i <= randomNum; i += 1) {
      if (randomNum % i === 0) {
        numOfDivisors += 1;
      }
    }
    let result;
    if (numOfDivisors === 2) {
      result = 'yes';
    } else result = 'no';
    console.log(randomNum);
    const answer = readlineSync.question('Your Answer: ');
    const correctAnswr = result === answer;
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
