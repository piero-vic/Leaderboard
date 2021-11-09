const leaderboardList = document.getElementById('leaderboard-list');

const populateList = (placeholders) => {
  placeholders.forEach((item, i) => {
    const newElement = document.createElement('li');
    newElement.innerHTML = `${item.name}: ${item.score}`;
    if (i % 2 === 1) {
      newElement.style.backgroundColor = '#d3d3d3';
    }
    leaderboardList.appendChild(newElement);
  });
};

export default populateList;
