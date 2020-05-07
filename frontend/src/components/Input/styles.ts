/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isErrored: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #dd1c1a;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            color: #fff;
            border-color: #999591;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #fff;
        `}

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

export const InputError = styled(Tooltip)`
    height: 18px;
    margin-left: 10px;

    svg {
        margin: 0;
    }
`;
