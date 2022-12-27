import readlineSync from 'readline-sync';

export const sayHelloAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const getRandomNum = (min, max) => {
  const result = Math.floor(min + Math.random() * (max + 1 - min));
  return result;
};

export const victoryCondition = (rounds, userName) => {
  if (rounds === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

//  MUST MAKE IT LATER
// export const compareAnswers = () => {
//   if (correctAnswr) {
//     console.log('Correct!');
//     rounds += 1;
//   } else if (!correctAnswr) {
//     console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again ${userName}`);
//     break;
//   }
// };
