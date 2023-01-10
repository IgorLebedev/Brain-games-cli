import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let numOfDivisors = 1;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      numOfDivisors += 1;
    }
  }
  return numOfDivisors === 2;
};

const getTaskAndAnswer = () => {
  const randomNum = getRandomNum(1, 100);
  const question = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrime = () => startGame(rules, getTaskAndAnswer);

export default startPrime;
