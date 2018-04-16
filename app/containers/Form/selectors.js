/**
 * Form page selectors
 */

import { createSelector } from 'reselect';

const selectForm = (state) => state.get('form');

const makeSelectQuestions = () => createSelector(
  selectForm,
  (formState) => formState.get('questions')
);
const makeSelectCurrent = () => createSelector(
  selectForm,
  (formState) => formState.get('current')
);
const makeSelectProgress = () => createSelector(
  selectForm,
  (formState) => formState.get('progress')
);

export {
  selectForm,
  makeSelectQuestions,
  makeSelectCurrent,
  makeSelectProgress,
};
