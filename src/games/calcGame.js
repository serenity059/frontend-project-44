import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: break;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));
  return [question, answer];
};

const startCalcGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startCalcGame;
