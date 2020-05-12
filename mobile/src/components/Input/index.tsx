/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
}

interface InputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const inputElementRef = useRef<any>(null);

    const { registerField, defaultValue = '', fieldName, error } = useField(
        name,
    );
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [registerField, fieldName]);

    return (
        <Container>
            {icon && <Icon name={icon} size={20} color="#666360" />}
            <TextInput
                ref={inputElementRef}
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                defaultValue={defaultValue}
                onChangeText={(newValue): void => {
                    inputValueRef.current.value = newValue;
                }}
                {...rest}
            />
        </Container>
    );
};

export default Input;
