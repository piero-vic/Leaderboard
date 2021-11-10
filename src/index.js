import './style.css';
import populateList from './populateList';
import { getScores, postScores } from './requests';

const TEST_GAME_ID = 'IsGWyZ5ywIUXczEDTXvL';

const refreshButton = document.getElementById('refresh-btn');
const form = document.getElementById('form');

refreshButton.addEventListener('click', () => {
  getScores(TEST_GAME_ID).then((scores) => {
    populateList(scores.result);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    user: document.getElementById('name-input').value,
    score: parseInt(document.getElementById('score-input').value, 10),
  };
  postScores(TEST_GAME_ID, body);
  document.getElementById('name-input').value = '';
  document.getElementById('score-input').value = '';
});

getScores(TEST_GAME_ID).then((scores) => {
  populateList(scores.result);
});
