import styled, { keyframes } from 'styled-components';
import { media } from '../../global-styles';
export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
  background: rgba('${(props) => props.theme.blue}', 0.5);
    animation: none;
  }
  display: ${(props) => props.hide ? 'none' : 'auto'};
  ${media.desktop`
    position: absolute;
    right: 0px;
    top: 50vh;
  `} 
`;
export const AddButton = styled.button`
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  font-style: italic;
  animation: ${(props) => props.pulse} 1.5s infinite;
  box-shadow: 0 0 0 0 rgba('${(props) => props.theme.lighterGrey}', .5);
  &:hover {
    animation: none;
  }
  &:focus, &:active {
    outline: none;
    border: none;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white};
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ToolTip = styled.div`
  position: absolute;
  bottom: -20px;
  font-weight: 200;
  font-size: 10px;
  color: ${(props) => props.theme.textDark};
  font-style: italic;
  width: 150px;
  display: flex;
  justify-content: center;
`;
export const pulse = keyframes`
  0% {
    transform: scale(.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba('${(props) => props.theme.lighterGrey}', 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba('${(props) => props.theme.lighterGrey}', 0);
  }
`;
