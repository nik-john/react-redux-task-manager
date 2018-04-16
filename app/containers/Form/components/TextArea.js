import styled from 'styled-components';

const TextArea = styled.textarea`
    font-size: 1em;
    border: none;
    box-shadow: none;
    border-radius: 0;    
    width: 90%;
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
    outline: none;
    &:focus {
        border-bottom: 2px solid ${(props) => props.theme.colors.global.blue};
    }
    transition: border 300ms ease-in;
    border-width: ${(props) => props.disabled ? '0px' : '1px'};
    text-align: ${(props) => props.disabled ? 'center' : 'start'};
    resize: ${(props) => props.disabled ? 'none' : 'auto'};
`;

export default TextArea;
