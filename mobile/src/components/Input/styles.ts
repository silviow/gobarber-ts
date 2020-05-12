/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    z-index: 2;
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #131214;
    border-radius: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    border-width: 2px;
    border-color: #131214;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #dd1c1a;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            border-color: #ccc; /* #999591 */
        `}
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 10px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;
