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
    id: 'simpleTask.components.MessagesBar.completeTasks',
    defaultMessage: 'Complete all tasks',
  },
  completeTasksSub: {
    id: 'simpleTask.components.MessagesBar.completeTasksSub',
    defaultMessage: `
    You have {tasksCount} active tasks
  `,
  },
  tasksCompleted: {
    id: 'simpleTask.components.MessagesBar.tasksCompleted',
    defaultMessage: 'All tasks completed',
  },
  tasksCompletedSub: {
    id: 'simpleTask.components.MessagesBar.tasksCompletedSub',
    defaultMessage: 'Well done!',
  },
  tasksEmpty: {
    id: 'simpleTask.components.MessagesBar.tasksEmpty',
    defaultMessage: 'Welcome to SimpleTask',
  },
  tasksEmptySub: {
    id: 'simpleTask.components.MessagesBar.tasksEmptySub',
    defaultMessage: 'You have no tasks. Get started by adding a new one below.',
  },

});
