import './style.css';
import populateList from './populateList';
import getScores from './requests'

const TEST_GAME_ID = 'IsGWyZ5ywIUXczEDTXvL'
const refreshButton = document.getElementById('refresh-btn')

refreshButton.addEventListener('click', () => {
  getScores(TEST_GAME_ID).then(scores => {
    populateList(scores.result);
  })
})

getScores(TEST_GAME_ID).then(scores => {
  populateList(scores.result);
})

console.log(getScores(TEST_GAME_ID))
