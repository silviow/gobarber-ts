import React, {
    InputHTMLAttributes,
    useRef,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, InputError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            <Container
                isErrored={!!error}
                isFocused={isFocused}
                isFilled={isFilled}
            >
                {Icon && <Icon size={18} />}
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    {...rest}
                />
                {error && (
                    <InputError title={error}>
                        <FiAlertCircle size={18} color="#dd1c1a" />
                    </InputError>
                )}
            </Container>
        </>
    );
};

export default Input;
