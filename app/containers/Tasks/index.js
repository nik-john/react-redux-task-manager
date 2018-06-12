/**
 *
 * Tasks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import H2 from 'components/H2';
import Info from 'components/Info';
import MessagesBar from 'components/MessagesBar';

import Task from 'containers/Task';

import injectReducer from 'utils/injectReducer';
import { makeSelectTasks, makeSelectCurrentTask, makeSelectFlushSeedData } from './selectors';
import reducer from './reducer';
import messages from './messages';
import { Wrapper, TaskContainerWrapper } from './Styles';
import { initAdd, addSeedData } from './actions';

export class Tasks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onInitAdd();
  }
  componentWillReceiveProps(props) {
    const { tasks } = props;
    if (tasks && tasks.length > this.props.tasks.length) {
      this.props.onInitAdd();
    }
  }
  render() {
    const { tasks, currentTask, onAddSeedData, flushSeedData } = this.props;
    const TaskList = [...tasks, currentTask].map((t) => <Task task={t} key={t.id ? t.id : 'key'} />);
    const activeTasks = tasks ? tasks.filter((t) => t.status === 'active') : [];
    return (
      <Wrapper>
        <Helmet>
          <title>SmartTasks Home</title>
          <meta name="description" content="List of Tasks that you can edit or remove. You can also add new ones." />
        </Helmet>
        <div>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <MessagesBar activeCount={activeTasks.length} totalCount={tasks ? tasks.length : 0} />
          <TaskContainerWrapper>
            {TaskList}
            <Info addSeedData={onAddSeedData} hide={flushSeedData} />
          </TaskContainerWrapper>
        </div>
      </Wrapper>
    );
  }
}

Tasks.propTypes = {
  onInitAdd: PropTypes.func,
  tasks: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.bool,
  ]),
  currentTask: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.bool,
  ]),
  onAddSeedData: PropTypes.func,
  flushSeedData: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  currentTask: makeSelectCurrentTask(),
  flushSeedData: makeSelectFlushSeedData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitAdd: () => {
      dispatch(initAdd());
    },
    onAddSeedData: () => {
      dispatch(addSeedData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tasks', reducer });

export default compose(
  withReducer,
  withConnect,
)(Tasks);
