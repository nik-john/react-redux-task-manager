import React from 'react';
import PropTypes from 'prop-types';
import { AddView, Wrapper } from './Styles';

export class Add extends React.Component {
  handleClick = () => {
    const { id, title, edit, status } = this.props;
    this.props.onAdd({
      id,
      title,
      edit,
      status,
    });
  }

  // handleComplete = () => this.props.onComplete(this.props.id);
  render() {
    return (
      <Wrapper onClick={this.handleClick} noBorder>
        <AddView>
            + Add Task
        </AddView>
      </Wrapper>
    );
  }
}

Add.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  edit: PropTypes.bool,
  status: PropTypes.oneOf(['completed', 'active']),
  onAdd: PropTypes.func,
};
