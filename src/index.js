import './style.css';

const leaderboardList = document.getElementById('leaderboard-list');

const placeholders = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 20,
  },
  {
    name: 'Name',
    score: 50,
  },
  {
    name: 'Name',
    score: 78,
  },
];

function populateList() {
  placeholders.forEach((item, i) => {
    const newElement = document.createElement('li');
    newElement.innerHTML = `${item.name}: ${item.score}`;
    if (i % 2 === 1) {
      newElement.style.backgroundColor = '#d3d3d3';
    }
    leaderboardList.appendChild(newElement);
  });
}

populateList();
