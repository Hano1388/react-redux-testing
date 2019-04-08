import { SAVE_COMMENT } from 'actions/types';

const INITIAL_STATE = ['First Comment', 'Second Comment'];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
