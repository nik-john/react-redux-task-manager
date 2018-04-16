import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  startForm,
  updateReply,
  next,
} from '../actions';

import { QUESTIONS } from '../constants';

describe('formReducer', () => {
  let state;
  const questions = fromJS(QUESTIONS);
  beforeEach(() => {
    state = fromJS({
      current: null,
      progress: [{
        index: 1,
        question: questions.get(0),
      }],
      questions,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the startForm action correctly', () => {
    const fixture = 'deebs';
    const expectedResult = state
      .set('current', questions.get(0))
      .set('questions', questions)
      .set('progress', state.get('progress'));

    expect(homeReducer(state, startForm(fixture))).toEqual(expectedResult);
  });

  it('should handle the updateReply action correctly', () => {
    const fixture = 'deebs';
    state = homeReducer(state, startForm());
    const expectedResult = state
      .setIn(['current', 'reply'], fixture);
    expect(homeReducer(state, updateReply(fixture))).toEqual(expectedResult);
  });

  it('should handle the next action correctly', () => {
    const fixture = 'deebs';
    state = homeReducer(state, startForm());
    const expectedResult = state
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
    expect(homeReducer(state, next(fixture))).toEqual(expectedResult);
  });
});
