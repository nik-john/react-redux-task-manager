import {
  fromJS,
} from 'immutable';

import {
  selectForm,
  makeSelectCurrent,
  makeSelectProgress,
  makeSelectQuestions,
} from '../selectors';

describe('selectForm', () => {
  it('should select the home state', () => {
    const formState = fromJS({
      abc: {},
    });
    const mockedState = fromJS({
      form: formState,
    });
    expect(selectForm(mockedState)).toEqual(formState);
  });
});

describe('makeSelectCurrent', () => {
  const usernameSelector = makeSelectCurrent();
  it('should select the current question', () => {
    const current = fromJS({
      foo: 'bar',
    });
    const mockedState = fromJS({
      form: {
        current,
      },
    });
    expect(usernameSelector(mockedState)).toEqual(current);
  });
});
describe('makeSelectProgress', () => {
  const progressSelector = makeSelectProgress();
  it('should select the current question', () => {
    const progress = fromJS({
      foo: 'bar',
    });
    const mockedState = fromJS({
      form: {
        progress,
      },
    });
    expect(progressSelector(mockedState)).toEqual(progress);
  });
});
describe('makeSelectQuestions', () => {
  const questionsSelector = makeSelectQuestions();
  it('should select the current question', () => {
    const questions = fromJS({
      foo: 'bar',
    });
    const mockedState = fromJS({
      form: {
        questions,
      },
    });
    expect(questionsSelector(mockedState)).toEqual(questions);
  });
});
