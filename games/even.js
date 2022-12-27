import readlineSync from 'readline-sync';
import { sayHelloAndGetName, getRandomNum, victoryCondition } from '../src/index.js';

const startGame = () => {
  const userName = sayHelloAndGetName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rounds = 0;

  do {
    const randomNum = getRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    let result;
    if (randomNum % 2 === 0) {
      result = 'yes';
    } else result = 'no';
    const answer = readlineSync.question('Your Answer: ');
    const isCorrectAnswer = answer === result;
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
