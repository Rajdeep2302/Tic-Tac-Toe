const boardEl = document.getElementById('board');
const messageEl = document.getElementById('message');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreD = document.getElementById('scoreD');

const popup = document.getElementById('popup');
const popupEmoji = document.getElementById('popup-emoji');
const popupMessage = document.getElementById('popup-message');
const popupRestart = document.getElementById('popup-restart');

const human = 'X';
const ai = 'O';
let board = Array(9).fill('');
let over = false;
let scores = { X: 0, O: 0, D: 0 };

const winningLines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function createBoard() {
  boardEl.innerHTML = '';
  board = Array(9).fill('');
  over = false;
  for (let i=0; i<9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.idx = i;
    cell.addEventListener('click', () => humanMove(i));
    boardEl.appendChild(cell);
  }
  updateMessage("Your turn");
}

function updateMessage(msg) {
  messageEl.textContent = msg;
}

function render() {
  document.querySelectorAll('.cell').forEach(c => {
    const idx = c.dataset.idx;
    c.textContent = board[idx];
    if (board[idx] !== '') c.classList.add('disabled');
  });
}

function checkWinner(bd) {
  for (const line of winningLines) {
    const [a,b,c] = line;
    if (bd[a] && bd[a] === bd[b] && bd[a] === bd[c]) {
      return bd[a];
    }
  }
  if (!bd.includes('')) return 'D';
  return null;
}

function minimax(bd, depth, isMax) {
  const winner = checkWinner(bd);
  if (winner === ai) return { score: 10 - depth };
  if (winner === human) return { score: depth - 10 };
  if (winner === 'D') return { score: 0 };

  if (isMax) {
    let best = { score: -Infinity };
    for (let i=0; i<9; i++) {
      if (bd[i] === '') {
        bd[i] = ai;
        let score = minimax(bd, depth+1, false);
        bd[i] = '';
        if (score.score > best.score) {
          best = { score: score.score, move: i };
        }
      }
    }
    return best;
  } else {
    let best = { score: Infinity };
    for (let i=0; i<9; i++) {
      if (bd[i] === '') {
        bd[i] = human;
        let score = minimax(bd, depth+1, true);
        bd[i] = '';
        if (score.score < best.score) {
          best = { score: score.score, move: i };
        }
      }
    }
    return best;
  }
}

function findBestMove(bd) {
  return minimax(bd.slice(), 0, true).move;
}

function humanMove(i) {
  if (over || board[i] !== '') return;
  board[i] = human;
  render();
  const res = checkWinner(board);
  if (res) return finish(res);

  updateMessage("AI thinking...");
  setTimeout(() => {
    const move = findBestMove(board);
    if (move !== undefined) board[move] = ai;
    render();
    const res2 = checkWinner(board);
    if (res2) return finish(res2);
    updateMessage("Your turn");
  }, 400);
}

function finish(result) {
  over = true;
  let emoji = '';
  if (result === human) {
    scores.X++;
    emoji = '🎉';
    popupMessage.textContent = "You Win!";
  } else if (result === ai) {
    scores.O++;
    emoji = '😢';
    popupMessage.textContent = "AI Wins!";
  } else {
    scores.D++;
    emoji = '😐';
    popupMessage.textContent = "Draw!";
  }
  popupEmoji.textContent = emoji;
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
  scoreD.textContent = scores.D;
  popup.classList.remove('hidden');
}

popupRestart.addEventListener('click', () => {
  popup.classList.add('hidden');
  createBoard();
});

createBoard();
