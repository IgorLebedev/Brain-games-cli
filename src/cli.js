import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}`);
};

export default sayHello;
