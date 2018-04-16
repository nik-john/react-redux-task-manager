import styled, { css } from 'styled-components';

const ProgressBarItem = styled.li`
padding: 20px;
height: 20px;
width: 20px;
border-radius: 20px;
align-items: center;
justify-content: center;
margin-right: 15px;
margin-bottom: 15px;
color: white;
background: #777;
display: inline-flex;
${(props) => props.answered && css `
    background: #3392FC;
`}
`;

export default ProgressBarItem;
