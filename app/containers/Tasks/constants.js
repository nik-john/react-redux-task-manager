/*
 *
 * Tasks constants
 *
 */

export const FETCH_TASKS = 'simpleTask/FETCH_TASKS';
export const INIT_ADD = 'simpleTask/INIT_ADD';
export const ADD_TASK = 'simpleTask/ADD_TASK';
export const INIT_EDIT = 'simpleTask/INIT_EDIT';
export const SAVE_TASK = 'simpleTask/SAVE_TASK';
export const COMPLETE_TASK = 'simpleTask/COMPLETE_TASK';
export const UNDO_TASK_CHANGE = 'simpleTask/UNDO_TASK_CHANGE';
export const UNDO_TASK_STATUS = 'simpleTask/UNDO_TASK_STATUS';
export const ADD_SEED_DATA = 'simpleTask/ADD_SEED_DATA';

export const SEED_DATA = [
  {
    id: 'b951ba9f-8877-456a-8704-698c999fdc57',
    title: 'Implement Unit Tests',
    edit: false,
    status: 'active',
  },
  {
    id: '33cc8f51-4182-4104-91a5-8136d9bd2545',
    title: 'Add Escape Path',
    edit: false,
    status: 'complete',
  },
  {
    id: 'b3190311-acb0-4f3d-9355-254d2c7f2679',
    title: 'Add 404 Page',
    edit: false,
    status: 'active',
  },
  {
    id: '3cc452b6-3f3f-41f3-b050-c969406a13e1',
    title: 'Deploy to Heroku',
    edit: false,
    status: 'complete',
  },
  {
    id: '33ac7a42-1b50-41c4-86e7-9e1854a70780',
    title: 'Add Demo Feature',
    edit: false,
    status: 'active',
  },
  {
    id: '8fd6db42-f7be-4c48-bc2d-c58b52f18e79',
    title: 'Update README',
    edit: false,
    status: 'active',
  },
];
