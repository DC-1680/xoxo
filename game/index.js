import { Map } from 'immutable'
import redux from 'redux'

const MOVE = 'move';
let board = Map();
const initialState = {board, turn: 'X'}

export const move = (player, position)  => {

  // board = board.setIn([1, 1], 'X');
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
      return  newState
    default:
      return state
  }
}
