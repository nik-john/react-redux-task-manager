/*
 *
 * Tasks reducer
 *
 */

import {
  fromJS,
} from 'immutable';
import {
  v4,
} from 'uuid';

import {
  ADD_TASK,
  COMPLETE_TASK,
  UNDO_TASK_CHANGE,
  INIT_EDIT,
  INIT_ADD,
  SAVE_TASK,
  UNDO_TASK_STATUS,
  ADD_SEED_DATA,
} from './constants';

const initialState = fromJS({
  tasks: false,
  currentTask: false,
  flushSeedData: false,
});

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_ADD:
      return state
        .set('currentTask', {
          id: v4(),
          title: null,
          status: 'active',
          edit: false,
        });
    case ADD_TASK:
      return state.get('tasks').length ?
        state
          .set('tasks', [...state.get('tasks'), {
            ...action.task,
            edit: true,
            id: v4(),
          }]) :
        state
          .set('tasks', [{
            ...action.task,
            edit: true,
            id: v4(),
          }]);
    case ADD_SEED_DATA:
      return state
        .set('tasks', action.tasks)
        .set('flushSeedData', true);
    case COMPLETE_TASK:
      return state
        .set('tasks', state.get('tasks').map((t) => t.id === action.id ? {
          ...t,
          status: 'completed',
        } : t,
        ));
    case UNDO_TASK_STATUS:
      return state
        .set('tasks', state.get('tasks').map((t) => t.id === action.id ? {
          ...t,
          status: t.status === 'completed' ? 'active' : 'completed',
        } : t));
    case UNDO_TASK_CHANGE:
      return state
        .set('tasks', state.get('tasks').filter((t) => t.title && t.title.length));
    case INIT_EDIT:
      return state
        .set('tasks', state.get('tasks').map((t) => t.id === action.id ? {
          ...t,
          edit: true,
        } : t));
    case SAVE_TASK:
      return state
        .set('tasks', state.get('tasks').map((t) => t.id === action.id ? {
          ...t,
          title: action.title || t.title,
          edit: false,
        } : t));
    default:
      return state;
  }
}

// const compare = (a, b) => {
//   if (a.title > b.title) {
//     return -1;
//   }
//   if (a.title < b.title) {
//     return 1;
//   }
//   return 0;
// };

export default tasksReducer;
