import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  border-top: 1px solid #666;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.textDark}; 
  background: ${(props) => props.theme.white}; 
  height: 55px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  .logo {
    font-weight: 800;
    font-size: 20px;
    color: ${(props) => props.theme.blue}; 
  }
`;

export default Wrapper;
