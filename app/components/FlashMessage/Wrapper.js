import styled from 'styled-components';

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 1em 2em;
  color: ${(props) => props.theme.colors.text.light};
  border-radius: 5px;
  background: ${(props) => props.type === 'error' ? props.theme.colors.global.red : props.theme.colors.global.green};
`;

export default Wrapper;
