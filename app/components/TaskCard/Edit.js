import React from 'react';
import PropTypes from 'prop-types';
import { EditView, Wrapper, SaveButton, Group } from './Styles';

export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      title: this.props.title,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      title: props.title,
    });
  }
  handleEdit = (e) => {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.title);
  }
  handleType = (e) => {
    // console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  }
  // handleComplete = () => this.props.onComplete(this.props.id);
  render() {
    const { title } = this.state;
    return (
      <Wrapper onSubmit={this.handleEdit}>
        <EditView>
          <Group>
            <input type="text" name="title" value={title || ''} onChange={this.handleType} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="title">Enter Task Name</label>
          </Group>
          <SaveButton type="submit" onClick={this.handleEdit}>Save</SaveButton>
        </EditView>
      </Wrapper>
    );
  }
}

Edit.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  // edit: PropTypes.bool,
  // status: PropTypes.oneOf(['completed', 'active']),
  onEdit: PropTypes.func,
};
