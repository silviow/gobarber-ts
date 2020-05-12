import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    z-index: 2;
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #131214;
    border-radius: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
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
