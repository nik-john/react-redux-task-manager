/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  fromJS,
} from 'immutable';

import {
  QUESTIONS,
  START_FORM,
  NEXT,
  BACK,
  GO_TO_STEP,
  UPDATE_REPLY,
  UPDATE_AND_NEXT,
  PREVIEW,
} from './constants';

const questions = fromJS(QUESTIONS);

// The initial state of the App
const initialState = fromJS({
  current: null,
  progress: [{
    index: 1,
    question: questions.get(0),
  }],
  questions,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_FORM:
      // Purge current state
      // Make current state QUESTIONS[0]
      // Update step to 1
      return state
        .set('current', state.getIn(['questions', 0]))
        .set('progress', fromJS([{
          index: 1,
          question: questions.get(0),
        }]));
    case UPDATE_REPLY:
      return state
        .setIn(['current', 'reply'], action.value);
    case UPDATE_AND_NEXT:
      //  This is needed to handle the curious case of the checkbox
      return state
        .setIn(['progress', -1, 'question', 'reply'], action.value)
        .set('current', state.get('questions').get(
          state.get('questions')
          .find((q) => q.get('id') === state.getIn(['current', 'next']))
          .get('index')
        ))
        .setIn(['progress', state.get('progress').size, 'question'], state.get('questions').get(
          state.get('questions')
          .find((q) => q.get('id') === state.getIn(['current', 'next']))
          .get('index')
        ))
        .setIn(['progress', state.get('progress').size, 'index'], state.getIn(['progress', -1, 'index']) + 1);
    case BACK:
      // Don't change progress
      // Set current to previous element in progress
      return state
        .set('current', state.getIn(['progress', -2, 'question']));
    case NEXT:
      // Update progress to reflect current reply
      // Update current to next question from questions
      // Push new current to progress and update index
      return state
        .setIn(['progress', -1, 'question', 'reply'], state.getIn(['current', 'reply']))
        .set('current', state.get('questions').get(
          state.get('questions')
          .find((q) => q.get('id') === state.getIn(['current', 'next']))
          .get('index')
        ))
        .setIn(['progress', state.get('progress').size, 'question'], state.get('questions').get(
          state.get('questions')
          .find((q) => q.get('id') === state.getIn(['current', 'next']))
          .get('index')
        ))
        .setIn(['progress', state.get('progress').size, 'index'], state.getIn(['progress', -1, 'index']) + 1);
    case PREVIEW:
      // Update progress to reflect current reply
      return state
        .setIn(['progress', -1, 'question', 'reply'], state.getIn(['current', 'reply']));
    case GO_TO_STEP:
      return state
        // Add functionality to save reply when navigating to step
        // .setIn(['progress', -1, 'question', 'reply'], state.getIn(['current', 'reply']))
        .set('current', state
          .get('progress')
            .find((p) => p.getIn(['question', 'id']) === action.id)
              .get('question') || state.get('current'));
    default:
      return state;
  }
}

// /**
//  * Iterates through the provided array of questions, finds the previous Question
//  *
//  * @param  {currentId} currentId The Id of the current question
//  * @param  {questions} questions Array of questions
//  *
//  * @return {object} An object with a type of Question
//  */

// // TODO: Maybe find a more efficient way to handle this?

// function findPreviousQ(currentId, questions) {
//   // const previousQ = questions.find(q.next === currentId);
//   // return previousQ ? previousQ : null;

//   return Object.entries(questions).find((q) => q.next === currentId) || null;
// }

export default homeReducer;
