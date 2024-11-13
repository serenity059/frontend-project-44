import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';

const genProgression = (start, step, len) => {
  const progression = [];
  for(let i = 0; i < len; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const len = 10;

  const progression = genProgression(start, step, len);
  const hiddenElement = getRandomNumber(0, len - 1);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default startProgressionGame;
