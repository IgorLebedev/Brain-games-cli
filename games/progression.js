import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();
  console.log('What number is missing in the progression?');
  let rounds = 0;
  do {
    const randomFirstNum = getRandomNum(1, 100);
    const randomStep = getRandomNum(1, 5);
    const randomLength = getRandomNum(5, 10);
    const randomEmpty = getRandomNum(0, randomLength - 1);
    const numArr = [];
    for (let i = 0; i < randomLength; i += 1) {
      if (numArr.length === 0) {
        numArr.push(randomFirstNum);
      } else numArr.push(numArr[i - 1] + randomStep);
    }
    const result = numArr[randomEmpty];
    numArr[randomEmpty] = '..';
    console.log(`Question: ${numArr.join(' ')}`);
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
