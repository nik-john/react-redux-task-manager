import React from 'react';
import PropTypes from 'prop-types';

import { Default } from 'components/TaskCard';
import Wrapper from './Wrapper';

function TaskContainer(props) {
  const { tasks } = props;
  return (
    <Wrapper>
      {tasks.length ? tasks.map((task) =>
        <Default {...task} key={task.id} />) :
        'No tasks to add'}
    </Wrapper>
  );
}

TaskContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.any),
};

export default TaskContainer;
