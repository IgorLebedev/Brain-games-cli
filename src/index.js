import readlineSync from 'readline-sync';

const startGame = (rules, getTaskAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 1) {
    const taskAnswer = getTaskAnswer();
    const question = taskAnswer[0];
    const correctAnswer = taskAnswer[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
