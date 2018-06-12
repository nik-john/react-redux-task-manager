import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import messages from './messages';

function MessagesBar(props) {
  const { activeCount, totalCount } = props;
  const isComplete = activeCount === 0 && totalCount !== 0;
  const isEmpty = totalCount === 0;
  // eslint-disable-next-line no-nested-ternary
  const title = isEmpty ? <FormattedMessage {...messages.tasksEmpty} /> :
    isComplete ? <FormattedMessage {...messages.tasksCompleted} /> :
    <FormattedMessage {...messages.completeTasks} />;
  // eslint-disable-next-line no-nested-ternary
  const sub = isEmpty ? <FormattedMessage {...messages.tasksEmptySub} /> :
    isComplete ? <FormattedMessage {...messages.tasksCompletedSub} /> :
    (<FormattedMessage
      {...messages.completeTasksSub}
      values={{
        tasksCount: activeCount,
      }}
    />);
  return (
    <Wrapper className={isComplete ? 'complete' : 'active'}>
      <section className="title">
        {title}
      </section>
      <section className="sub">
        {sub}
      </section>
    </Wrapper>
  );
}

MessagesBar.propTypes = {
  activeCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default MessagesBar;
