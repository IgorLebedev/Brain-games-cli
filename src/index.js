import readlineSync from 'readline-sync';

export const sayHelloAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const randomNum = Math.round(Math.random() * 10);
