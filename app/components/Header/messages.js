/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  logo: {
    id: 'simpleTask.components.Header.logo',
    defaultMessage: 'SimpleTask',
  },
  helloUser: {
    id: 'simpleTask.components.Header.user.helloUser',
    defaultMessage: `
      Hello, {username}!
    `,
  },
});
