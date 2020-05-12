/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface CustomTextProps extends TextProps {
    color: string;
    fontSize: string;
}

export const Container = styled(RectButton)`
    z-index: 2;
    align-items: center;
    flex-direction: row;
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 10px;
    color: ${(props) => props.color};
`;

export const Text = styled.Text<CustomTextProps>`
    font-size: ${(props) => props.fontSize};
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color};
    font-family: 'Roboto-Regular';
`;
