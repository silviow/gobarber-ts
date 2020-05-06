import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 58px;
    display: flex;
    color: #666360;
    padding: 18px 16px;
    align-items: center;
    border-radius: 12px;
    background: #131214;
    border: 2px solid #131214;

    & + div {
        margin-top: 10px;
    }

    svg {
        margin-right: 10px;
    }

    input {
        flex: 1;
        color: #fff;
        border: none;
        height: 58px;
        padding-top: 1px;
        background: transparent;

        &::placeholder {
            color: #666360;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:active,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            border: none;
            -webkit-text-fill-color: #fff;
            box-shadow: 0 0 0px 1000px transparent inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    }
`;
