async function getScores(id) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const response = await fetch(url, { method: 'GET' });
  const scores = await response.json();
  return scores;
}

async function postScores(id, body) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export { getScores, postScores };
