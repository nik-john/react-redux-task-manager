import styled from 'styled-components';

const FormWrapper = styled.div`
    min-height: 600px;
    min-width: 600px;
    background-color: ${(props) => props.theme.colors.global.white};
    padding: 10px 0;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.text.dark};
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    @media (max-width: 700px) {
        width: calc(100% - 20px);
        margin: 0 10px;
        min-width: auto;
    }
    `;

export default FormWrapper;
