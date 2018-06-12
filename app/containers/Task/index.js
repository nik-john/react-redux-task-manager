/**
 *
 * Task
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { initAdd, addTask, completeTask, undoTaskChange, undoTaskStatus, saveTask, initEdit } from 'containers/Tasks/actions';
import { Add, Default, Edit } from 'components/TaskCard';

// import messages from './messages';

export class Task extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { task, onComplete, onUndoTaskStatus, onUndoTaskChange, onEdit, onInitEdit, onAdd } = this.props;
    if (task.edit) {
      return <Edit {...task} onEdit={onEdit} onUndoTaskChange={onUndoTaskChange} />;
    } else if (task.title) {
      return <Default {...task} onComplete={onComplete} onUndoTaskStatus={onUndoTaskStatus} onInitEdit={onInitEdit} />;
    }
    return <Add onAdd={onAdd} {...task} />;
  }
}

Task.propTypes = {
  task: PropTypes.any,
  onComplete: PropTypes.func,
  onUndoTaskStatus: PropTypes.func,
  onUndoTaskChange: PropTypes.func,
  onEdit: PropTypes.func,
  onInitEdit: PropTypes.func,
  onAdd: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    onComplete: (id) => {
      dispatch(completeTask(id));
    },
    onUndoTaskStatus: (id) => {
      dispatch(undoTaskStatus(id));
    },
    onUndoTaskChange: (id) => {
      dispatch(undoTaskChange(id));
    },
    onEdit: (id, title) => {
      dispatch(saveTask(id, title));
    },
    onInitEdit: (id) => {
      dispatch(initEdit(id));
    },
    onAdd: (task) => {
      dispatch(addTask(task));
    },
    onInitAdd: () => {
      dispatch(initAdd());
    },
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Task);
