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

const makeSelectFlushSeedData = () => createSelector(
  selectTasksDomain,
  (tasksState) => tasksState.get('flushSeedData')
);

export {
  selectTasksDomain,
  makeSelectTasks,
  makeSelectCurrentTask,
  makeSelectFlushSeedData,
};
