import styled from 'styled-components';
import { media } from '../../global-styles';

export const Wrapper = styled.section`
  width: 100%;
`;

export const TaskContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin:-10px;
  margin-top: 20px;
  > * {
    margin: 10px;
  }
  ${media.tablet`
    flex-flow: row wrap;
    justify-content: flex-start;
  `} 
`;
