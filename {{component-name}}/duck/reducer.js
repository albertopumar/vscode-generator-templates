import { ACTION } from './type';

function reducer(state = 0, action) {
  switch (action.type) {
    case ACTION:
      return state;
    default:
      return state;
  }
}

export default reducer;
