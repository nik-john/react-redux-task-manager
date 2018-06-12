import styled from 'styled-components';
import { media } from '../../global-styles';

export const Wrapper = styled.header`
  padding: 0px 20px;
  border-top: 1px solid #666;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.textDark}; 
  background: ${(props) => props.theme.white}; 
  height: 55px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${media.desktop`
    width: calc(100vh - 100px);
  `} 
  .logo {
    font-weight: 800;
    font-size: 20px;
    color: ${(props) => props.theme.blue}; 
  }
`;
