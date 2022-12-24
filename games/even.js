import readlineSync from 'readline-sync';
import { sayHelloAndGetName } from '../src/index.js';

const brainEven = () => {
  const userName = sayHelloAndGetName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rounds = 0;

  do {
    const randomNum = Math.round(Math.random() * 10);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your Answer: ');
    const correctAnswrYes = answer === 'yes' && randomNum % 2 === 0;
    const correctAnswrNo = answer === 'no' && randomNum % 2 !== 0;
    if (correctAnswrYes || correctAnswrNo) {
      console.log('Correct!');
      rounds += 1;
    } else if (!correctAnswrNo) {
      console.log(`\'${answer}\' is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${userName}`);
      rounds += 4;
    } else if (!correctAnswrYes) {
      console.log(`\'${answer}\' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again ${userName}`);
      rounds += 4;
    }
  } while (rounds < 3);
  if (rounds === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default brainEven;
