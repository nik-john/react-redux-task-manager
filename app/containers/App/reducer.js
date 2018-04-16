/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  ERROR, CLEAR_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return state
        .set('error', fromJS({
          message: action.message,
        }))
        .set('loading', false);
    case CLEAR_ERROR:
      return state
        .set('error', null)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
