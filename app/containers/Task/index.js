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

import { initAdd, addTask, completeTask, undoTaskChange, saveTask, initEdit } from 'containers/Tasks/actions';
import { Add, Default, Edit } from 'components/TaskCard';

// import messages from './messages';

export class Task extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { task, onComplete, onUndo, onEdit, onInitEdit, onAdd } = this.props;
    if (task.edit) {
      return <Edit {...task} onEdit={onEdit} />;
    } else if (task.title) {
      return <Default {...task} onComplete={onComplete} onUndo={onUndo} onInitEdit={onInitEdit} />;
    }
    return <Add onAdd={onAdd} {...task} />;
  }
}

Task.propTypes = {
  task: PropTypes.any,
  onComplete: PropTypes.func,
  onUndo: PropTypes.func,
  onEdit: PropTypes.func,
  onInitEdit: PropTypes.func,
  onAdd: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    onComplete: (id) => {
      dispatch(completeTask(id));
    },
    onUndo: (id) => {
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
