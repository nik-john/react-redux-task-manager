import styled from 'styled-components';

const NumberField = styled.input`
    font-size: 1em;
    border: none;
    box-shadow: none;
    border-radius: 0;    
    width: 90%;
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.borderDefault};
    outline: none;
    &:focus {
        border-bottom: 2px solid ${(props) => props.theme.blue};
    }
    border-width: ${(props) => props.disabled ? '0px' : '1px'};
    text-align: ${(props) => props.disabled ? 'center' : 'start'};
`;

export default NumberField;
