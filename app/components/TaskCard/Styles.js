import styled from 'styled-components';
import { media } from '../../global-styles';

export const Wrapper = styled.article `
  border-radius: 3px;
  background: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.boxShadowLight};
  border: 1px solid ${(props) => props.noBorder ? 'transparent' : props.theme.borderDefault};
  position: relative;
  padding: 0px 20px;
  color: ${(props) => props.theme.lightGrey};
  height: 85px;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  &:hover {
    border-color: ${(props) => props.noBorder ? props.theme.blue : props.theme.borderDefault};
  }
  ${media.tablet`
    min-width: 0px;
    width: 30%;
  `} 
  ${media.desktop`
    width: 22.5%;
  `} 
`;

export const DefaultView = styled.article `
  display: flex;
  overflow: hidden;
`;

export const Overlay = styled.div `
  border-radius: 3px;
  position: absolute;
  text-transform: capitalize;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.navyBlue};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9em;
  .complete {
    color: ${(props) => props.theme.green};
    cursor: pointer;
  }
  .undo {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
  .edit {
    cursor: pointer;
  }
  .separator {
    border: 0.5px solid ${(props) => props.theme.grey};
    height: 60%;
  }
`;

export const AddView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.lighterGrey};
  width: 100%;
  border-radius: inherit;
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;

export const EditView = styled.form `
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  input {
    width: 100%;
    padding:10px 10px 10px 5px;
    display:block;
    border:none;
    border-bottom:1px solid rgba(${(props) => props.theme.lighterGrey}, 0.75);
  }
  input:focus { 
    outline:none;
  }
  label {
    color:${(props) => props.theme.lighterGrey}; 
    font-size:16px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:25px;
    top:30px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    &:after {
      content: '...';
    }
  }
  /* active state */
input:focus ~ label, input:valid ~ label {
  top: 10px;
  font-size: 10px;
  color:${(props) => props.theme.lighterGrey};
  font-weight: lighter;
  &:after {
      content: '';
    }
}

/* BOTTOM BARS ================================= */
.bar { position:relative; display:block; }
.bar:before, .bar:after {
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:${(props) => props.theme.blue}; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
  from { background:${(props) => props.theme.blue}; }
  to { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:${(props) => props.theme.blue}; }
  to { width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:${(props) => props.theme.blue}; }
  to { width:0; background:transparent; }
}
`;

export const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  .title {
    font-weight: 600;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
`;
export const Status = styled.p `
  text-transform: capitalize;
  color: ${(props) => props.completed ? props.theme.green : props.theme.lighterGrey};
  font-size: 11px;
`;
export const SaveButton = styled.button`
  font-weight: 600;
  color: ${(props) => props.theme.blue};
  display: flex;
  flex: 2;
`;

export const Group = styled.div `
  display: flex;
  flex: 8;
`;
