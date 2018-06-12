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
    this.setInputRef = this.setInputRef.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keyup', this.handleEsc);
    this.inputRef.focus();
  }
  componentWillReceiveProps(props) {
    this.inputRef.focus();
    this.setState({
      title: props.title,
    });
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keyup', this.handleEsc);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }
  setInputRef = (node) => {
    this.inputRef = node;
  }
  handleType = (e) => {
    this.setState({
      title: e.target.value,
    });
  }
  handleEdit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.title.length) {
      return;
    }
    this.props.onEdit(this.props.id, this.state.title);
  }
  handleEsc(e) {
    if (e.keyCode && e.keyCode === 27) {
      this.props.onUndoTaskChange(this.props.id);
    }
  }
  handleFocus(e) {
    const tempValue = e.target.value;
    e.target.value = '';
    e.target.value = tempValue;
  }
  handleClickOutside(event) {
    if (this.wrapperRef &&
          !this.wrapperRef.contains(event.target) &&
          !this.state.title) {
      if (event.target && event.target.innerText && event.target.innerText === '+ Add Task') {
        return;
      }
      this.props.onUndoTaskChange(this.props.id);
    }
  }
  render() {
    const { title } = this.state;
    return (
      <Wrapper onSubmit={this.handleEdit} innerRef={this.setWrapperRef}>
        <EditView>
          <Group>
            <input type="text" name="title" value={title || ''} onChange={this.handleType} ref={this.setInputRef} onFocus={this.handleFocus} required />
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
  onUndoTaskChange: PropTypes.func,
};
