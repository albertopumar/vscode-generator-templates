import { {{REDUX_ACTION}} } from './type';

function reducer(state = 0, action) {
  switch (action.type) {
    case {{REDUX_ACTION}}:
      return state;
    default:
      return state;
  }
}

export default reducer;
