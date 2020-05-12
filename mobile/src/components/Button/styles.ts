import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    z-index: 2;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    background: #000;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto-Medium';
`;
