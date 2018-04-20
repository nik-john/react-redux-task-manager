import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.white};;
  color: ${(props) => props.theme.white};
  transition: all 300ms ease;
  &:active, &:hover {
    color: ${(props) => props.theme.blue};
    background: ${(props) => props.theme.white};
  }
`;
