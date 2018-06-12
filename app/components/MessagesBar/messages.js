/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import {
  defineMessages,
} from 'react-intl';

export default defineMessages({
  completeTasks: {
    id: 'todos.components.MessagesBar.completeTasks',
    defaultMessage: 'Complete all tasks',
  },
  completeTasksSub: {
    id: 'todos.components.MessagesBar.completeTasksSub',
    defaultMessage: `
    You have {tasksCount} active tasks
  `,
  },
  tasksCompleted: {
    id: 'todos.components.MessagesBar.tasksCompleted',
    defaultMessage: 'All tasks completed',
  },
  tasksCompletedSub: {
    id: 'todos.components.MessagesBar.tasksCompletedSub',
    defaultMessage: 'Well done!',
  },
  tasksEmpty: {
    id: 'todos.components.MessagesBar.tasksEmpty',
    defaultMessage: 'Welcome to SimpleTask',
  },
  tasksEmptySub: {
    id: 'todos.components.MessagesBar.tasksEmptySub',
    defaultMessage: 'You have no tasks. Get started by adding a new one below.',
  },

});
