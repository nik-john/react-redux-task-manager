import { createSelector } from 'reselect';

/**
 * Direct selector to the tasks state domain
 */
const selectTasksDomain = (state) => state.get('tasks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tasks
 */

const makeSelectTasks = () => createSelector(
  selectTasksDomain,
  (tasksState) => tasksState.get('tasks')
);

const makeSelectCurrentTask = () => createSelector(
  selectTasksDomain,
  (tasksState) => tasksState.get('currentTask')
);

export {
  selectTasksDomain,
  makeSelectTasks,
  makeSelectCurrentTask,
};
