/*
 *
 * Tasks actions
 *
 */

import {
  COMPLETE_TASK, INIT_ADD, ADD_TASK, INIT_EDIT, SAVE_TASK, UNDO_TASK_STATUS, UNDO_TASK_CHANGE, ADD_SEED_DATA, SEED_DATA,
} from './constants';


/**
 * Adds a new task to the board
 *
 * @return {object}    An action object with a type of FETCH_TASKS
 */
/* export function fetchTasks() {
  return {
    type: FETCH_TASKS,
  };
} */

/**
 * Initiate the adding of a new task
 *
 *
 * @return {object} s   An action object with a type of INIT_ADD
 */
export function initAdd() {
  return {
    type: INIT_ADD,
  };
}

/**
 * Adds a new task to the board
 *
 * @param  {id} id The id of the new task
 *
 * @return {object}    An action object with a type of ADD_TASK
 */
export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

/**
 * Adds a set of sample tasks to the board
 *
 *
 * @return {object}    An action object with a type of ADD_SEED_DATA
 */
export function addSeedData() {
  return {
    type: ADD_SEED_DATA,
    tasks: SEED_DATA,
  };
}

/**
 * Initiate the edit of a task
 *
 * @param  {id} id The id of the task
 *
 * @return {object} s   An action object with a type of INIT_EDIT
 */
export function initEdit(id) {
  return {
    type: INIT_EDIT,
    id,
  };
}
/**
 * Save a task
 *
 * @param  {id} id The id of the task
 * @param  {title} title The new title of the task
 *
 * @return {object} s   An action object with a type of SAVE_TASK
 */
export function saveTask(id, title) {
  return {
    type: SAVE_TASK,
    id,
    title,
  };
}

/**
 * Complete a task
 *
 * @param  {id} id The id of the task
 *
 * @return {object}    An action object with a type of COMPLETE_TASK
 */
export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    id,
  };
}

/**
 * Undo changes to a task's status
 *
 * @param  {id} id The id of the task
 *
 * @return {object}    An action object with a type of UNDO_TASK_STATUS
 */
export function undoTaskStatus(id) {
  return {
    type: UNDO_TASK_STATUS,
    id,
  };
}

/**
 * Undo changes to a task
 *
 * @param  {id} id The id of the task
 *
 * @return {object}    An action object with a type of UNDO_TASK_CHANGE
 */
export function undoTaskChange(id) {
  return {
    type: UNDO_TASK_CHANGE,
    id,
  };
}
