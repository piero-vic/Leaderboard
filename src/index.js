import './style.css';
import populateList from './populateList';
import getScores from './requests'

const TEST_GAME_ID = 'IsGWyZ5ywIUXczEDTXvL'

getScores(TEST_GAME_ID).then(scores => {
  populateList(scores.result);
})
