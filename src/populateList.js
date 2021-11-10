const leaderboardList = document.getElementById('leaderboard-list');

const populateList = (list) => {
  leaderboardList.innerHTML = '';
  list.forEach((item, i) => {
    const newElement = document.createElement('li');
    newElement.innerHTML = `${item.user}: ${item.score}`;
    if (i % 2 === 1) {
      newElement.style.backgroundColor = '#d3d3d3';
    }
    leaderboardList.appendChild(newElement);
  });
};

export default populateList;
