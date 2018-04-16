/*
 * Home Actions
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
  START_FORM,
  UPDATE_REPLY,
  UPDATE_AND_NEXT,
  GO_TO_STEP,
  NEXT,
  BACK,
  PREVIEW,
} from './constants';

/**
 * Initialize and navigate to the first step of the form
 *
 *
 * @return {object} An action object with a type of START_FORM
 */
export function startForm() {
  return {
    type: START_FORM,
  };
}

/**
 * Update reply text in current obj
 *
 *
 * @return {object} An action object with a type of UPDATE_REPLY
 */
export function updateReply(value) {
  return {
    type: UPDATE_REPLY,
    value,
  };
}

/**
 * Navigate to step corresponding to the provided Id
 *
 * @param  {id} id The Id to be navigated to
 *
 * @return {object} An action object with a type of GO_TO_STEP
 */
export function goToStep(id) {
  return {
    type: GO_TO_STEP,
    id,
  };
}

/**
 * Navigate to step corresponding to the provided Id
 *
 * @param  {id} id The Id to be navigated to
 *
 * @return {object} An action object with a type of GO_TO_STEP
 */
export function updateAndGoToNext(value, id) {
  return {
    type: UPDATE_AND_NEXT,
    value,
    id,
  };
}

/**
 * Navigate to the next step
 *
 * @param  {id} id The Id to be navigated from
 *
 * @return {object} An action object with a type of NEXT
 */
export function next(id) {
  return {
    type: NEXT,
    id,
  };
}

/**
 * Navigate to the previous step
 *
 * @param  {id} id The Id to be navigated from
 *
 * @return {object} An action object with a type of BACK
 */
export function back(id) {
  return {
    type: BACK,
    id,
  };
}

/**
 * Navigate to the preview step
 *
 * @param  {id} id The Id to be navigated from
 *
 * @return {object} An action object with a type of PREVIEW
 */
export function preview(id) {
  return {
    type: PREVIEW,
    id,
  };
}
