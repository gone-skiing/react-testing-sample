import {SOME_ACTION} from './redux-action-actions';

export default function reducer(state = {message: 'Initial'}, action) {
  // noinspection JSRedundantSwitchStatement
  switch (action.type) {
    case SOME_ACTION:
      return {...state, message: action.message};
    default:
      return state;
  }
}
