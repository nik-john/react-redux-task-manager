import {
  START_FORM,
  NEXT,
  UPDATE_REPLY,
} from '../constants';

import {
  startForm,
  next,
  updateReply,
} from '../actions';

describe('Form Actions', () => {
  describe('startForm', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: START_FORM,
      };
      expect(startForm()).toEqual(expectedResult);
    });
  });
  describe('next', () => {
    it('should return the correct type and id', () => {
      const fixture = 'Deebs';
      const expectedResult = {
        type: NEXT,
        id: fixture,
      };

      expect(next(fixture)).toEqual(expectedResult);
    });
  });
  describe('updateReply', () => {
    it('should return the correct type and value', () => {
      const fixture = 'Deebs';
      const expectedResult = {
        type: UPDATE_REPLY,
        value: fixture,
      };

      expect(updateReply(fixture)).toEqual(expectedResult);
    });
  });
});
