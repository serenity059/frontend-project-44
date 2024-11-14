import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no",';

const primeOrNot = (num) => {

  const limit = Math.sqrt(num);

  if (num < 2) {
    return false;
  }

  for (let i = 2; i <=  limit; i += 1) {
     if (num % i === 0) {
       return false;
     }
  }
  return true;
};

const getQuestionAndAnswer = () => {

  const num = getRandomNumber(1, 100);
  const correctAnswer = primeOrNot(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, correctAnswer];
};

const startPrimeGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startPrimeGame;
