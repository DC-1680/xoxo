import { Map } from 'immutable'
import redux from 'redux'

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

const winner = (board) => {
//board.forEach()
const coords = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
]
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    if(i[j]  === 'X'){
      
    }
  }
}
  if(){
  //if streak winner returned
  return 
  } else if(board.includes(null)){
  //no streak check if any null
  //.includes(will check for null)
    return null;
  } else {
    return 'draw';
  }

}

const streak = (board, firstCoord, ...remainingCoords) => {
  //helper func for checking the coords for either player
  let player = board.getIn(firstCoord);
  if (!player) return null;
  for (let coord of remainingCoords){
    if(board.getIn(coord) !== player) return null;
 }
 return player;
}