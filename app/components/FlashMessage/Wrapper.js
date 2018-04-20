import styled from 'styled-components';

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 1em 2em;
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  background: ${(props) => props.type === 'error' ? props.theme.red : props.theme.green};
`;

export default Wrapper;
