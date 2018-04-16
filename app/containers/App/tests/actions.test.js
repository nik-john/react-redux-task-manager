import {
  ERROR,
} from '../constants';

import {
  setError,
} from '../actions';

describe('App Actions', () => {
  describe('setError', () => {
    it('should return the correct type and error message', () => {
      const message = 'all is lost';
      const expectedResult = {
        type: ERROR,
        message,
      };

      expect(setError(message)).toEqual(expectedResult);
    });
  });
});
