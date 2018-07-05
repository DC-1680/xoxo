import { Map } from 'immutable'
import redux from 'redux'
// import { constants } from 'http2';

const MOVE = 'move';
let board = Map();
const initialState = { board, turn: 'X' }

export const move = (player, position) => {
  return {
    type: MOVE,
    position: position,
    player: player
  }
};


export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case MOVE:
      newState.board = newState.board.setIn(action.position, action.player)
      newState.turn = newState.turn === 'X' ? 'O' : 'X'
      winner(newState.board)
      return newState
    default:
      return state
  }
}

export const winner = (board) => {
  //board.forEach()
  let row = (a, b) => ([[a, b], [a, b + 1], [a, b + 2]]);
  let col = (a, b) => ([[a, b], [a + 1, b], [a + 2, b]]);
  let diag1 = (a, b) => ([[a, b], [a + 1, b + 1], [a + 2, b + 2]]);
  let diag2 = (a, b) => ([[a, b], [a + 1, b - 1], [a + 2, b - 2]]);

  // const coords = [
  //   [0, 0], [0, 1], [0, 2],
  //   [1, 0], [1, 1], [1, 2],
  //   [2, 0], [2, 1], [2, 2]
  // ]

  for (let i = 0; i < 3; i++) {
    if (streak(board, row(i, i)) === "X" || streak(board, col(i, i)) === "X") {
      return "X wins"
    } else if (streak(board, row(i, i) === "O" || streak(board, col(i, i)) === "O")) {
      return "O wins"
    }
  }

  if (streak(board, diag1(0, 0) === "X" || streak(board, diag2(0, 2) === "X"))) {
    return "X wins";
  } else if (streak(board, diag1(0, 0) === "O" || streak(board, diag2(0, 2) === "O"))) {
    return "0 wins"
  }


  // if (board.includes(null)) {
  //   //no streak check if any null
  //   //.includes(will check for null)
  //   return null;
  // }

  return 'draw';
}

const streak = (board, firstCoord, ...remainingCoords) => {
  //helper func for checking the coords for either player
  let player = board.getIn(firstCoord);
  if (!player) return null;
  for (let coord of remainingCoords) {
    if (board.getIn(coord) !== player) return null;
  }
  return player;
}