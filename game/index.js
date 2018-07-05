import { Map } from 'immutable'
import redux from 'redux'

const MOVE = 'move';


// board = board.setIn([1, 1], 'X');

let move = ((position, player) => {
  let board = Map();
  board.setIn(position, player)
  return {
    type: MOVE,
    position: position,
    player: player
  }
});

export default function reducer(state, action) {
  switch (action.type) {
    case MOVE:
      return state + action.position + action.player
    default:
      return state
  }
};


