import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  setError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the error action correctly', () => {
    const message = 'All is lost';
    const expectedResult = state
      .set('error', fromJS({
        message,
      }))
      .set('loading', false);

    expect(appReducer(state, setError(message))).toEqual(expectedResult);
  });
});
