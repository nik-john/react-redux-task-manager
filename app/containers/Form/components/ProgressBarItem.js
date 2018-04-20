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
border-width: 1px;
border-style: solid;
border-color: ${(props) => props.theme.borderDefault};
transition: all 300ms ease;
&:hover {
    border-color: ${(props) => props.theme.borderDefault};
    color: ${(props) => props.theme.textDark};
    background-color: ${(props) => props.theme.white};
}
${(props) => props.answered && css `
    background: ${props.theme.blue};
    &:hover {
        border-color: ${props.theme.blue};
        color: ${props.theme.blue};
        background-color: ${props.theme.white};
    }
`}
`;

export default ProgressBarItem;
