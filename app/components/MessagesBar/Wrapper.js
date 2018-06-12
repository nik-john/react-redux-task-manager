import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.white};
  border-radius: 2px;
  justify-content: space-around;
  padding: 15px 20px;
  &.active {
    background: ${(props) => props.theme.blue};
  }
  &.complete {
    background: ${(props) => props.theme.green};
  }
  .title {
    font-weight: 600;
  }
  .sub {
    margin-top: 10px;
    font-size: 14px;
    font-weight: lighter;
  }
`;

export default Wrapper;
