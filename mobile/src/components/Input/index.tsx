import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    return (
        <Container>
            {icon && <Icon name={icon} size={20} color="#666360" />}
            <TextInput
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                {...rest}
            />
        </Container>
    );
};

export default Input;
