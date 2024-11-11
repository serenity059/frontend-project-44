import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = "Find the greatest common divisor of given numbers.";

const findGCD = (a, b) => {
  while (b !== 0) {
    const tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(findGCD(num1, num2));
  return [question, answer];
};

const startGcdGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startGcdGame;
