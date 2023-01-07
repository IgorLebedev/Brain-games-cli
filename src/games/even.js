import readlineSync from 'readline-sync';
import getRandomNum from '../utils.js'
import { sayHelloAndGetName } from '../index.js';

const userName = sayHelloAndGetName();
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = () => {
  const taskAnswerArr = [task, answer];
  const randomNum = getRandomNum(1, 100);
  let result;
  if (randomNum % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  const answer = readlineSync.question('Your Answer: ');
  const isCorrectAnswer = answer === result;
};

export default startGame;
