import styled from 'styled-components';

const ToggleSwitch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    h5 {
        margin-left: 15px;
        width: 20px;
    }
    input[type=checkbox]{
        height: 0;
        width: 0;
        visibility: hidden;
    }
    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 100px;
        height: 50px;
        background: grey;
        display: block;
        border-radius: 50px;
        position: relative;
    }

    label:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 40px;
        transition: 0.3s;
    }

    input:checked + label {
        background: ${(props) => props.theme.colors.global.blue};
    }

    input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    label:active:after {
        width: 80px;
    }
`;

export default ToggleSwitch;
