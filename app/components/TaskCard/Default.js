import React from 'react';
import PropTypes from 'prop-types';
import { Status, Overlay, TextContainer, Wrapper, DefaultView } from './Styles';

export class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
  }
  componentWillReceiveProps() {
    this.setState({
      showOverlay: false,
    });
  }
  showOverlay = () => {
    this.setState({
      showOverlay: true,
    });
  }
  hideOverlay = () => {
    this.setState({
      showOverlay: false,
    });
  }
  handleUndo = () => this.props.onUndoTaskStatus(this.props.id);
  handleComplete = () => this.props.onComplete(this.props.id);
  handleEdit = () => this.props.onInitEdit(this.props.id);
  render() {
    const { title, status } = this.props;
    const { showOverlay } = this.state;
    return (
      <Wrapper onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
        <DefaultView>
          <TextContainer>
            <p className="title">
              {title}
            </p>
            <Status completed={status === 'completed'}>
              {status}
            </Status>
          </TextContainer>
          {showOverlay ? <Overlay>
            { status === 'active' ?
              <button className="complete" role="Menuitem" onClick={this.handleComplete}>Complete</button> :
              <button className="undo" role="Menuitem" onClick={this.handleUndo}>Undo</button>}
            <span className="separator" />
            <button className="edit" role="Menuitem" onClick={this.handleEdit}>Edit</button>
          </Overlay> : ''}
        </DefaultView>
      </Wrapper>
    );
  }
}

Default.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.oneOf(['completed', 'active']),
  onInitEdit: PropTypes.func,
  onComplete: PropTypes.func,
  onUndoTaskStatus: PropTypes.func,
};
