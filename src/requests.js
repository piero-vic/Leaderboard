async function getScores(id) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const response = await fetch(url, {method: 'GET'});
  const scores = await response.json();
  return scores;
}

export default getScores;
