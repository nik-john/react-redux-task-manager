/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ERROR,
  CLEAR_ERROR,
} from './constants';

/**
 * Set error message
 *
 * @return {object} An action object with a type of ERROR and message
 */
export function setError(message) {
  return {
    type: ERROR,
    message,
  };
}
/**
 * Set error to null
 *
 * @return {object} An action object with a type of CLEAR_ERROR
 */
export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}
