// utils.js
function getWinner(player1: string, player2: string) {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) return player1;
  return player2;
}

function warRagnarok(player1: string, player2: string) {
  const winner = getWinner(player1, player2);

  let player1Win = 0;
  let player2Win = 0;

  if (winner === player1) player1Win += 1;
  if (winner === player2) player2Win += 1;

  return player1Win === 2 ? player1 : player2Win === 2 ? player2 : null;
}

function showTheWinner(player1: string, player2: string) {
  const winner = getWinner(player1, player2);

  alert(winner);
}

export default { getWinner, warRagnarok, showTheWinner };
