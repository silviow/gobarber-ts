import React, { useRef, useCallback } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    View,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Title, ReturnToLoginLink } from './styles';
import logoImg from '../../assets/logo.png';
import BackgroundText from '../../components/BackgroundText';

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    const handleRegister = useCallback((data: object) => {
        console.log(data);
    }, []);

    return (
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImg} style={{ zIndex: 2 }} />
                    <BackgroundText />
                    <View>
                        <Title>Join us</Title>
                    </View>
                    <Form ref={formRef} onSubmit={handleRegister}>
                        <Input name="name" icon="user" placeholder="Name" />
                        <Input name="email" icon="mail" placeholder="Email" />
                        <Input
                            name="password"
                            icon="lock"
                            placeholder="Password"
                        />
                        <Button
                            onPress={(): void => {
                                formRef.current?.submitForm();
                            }}
                        >
                            Register
                        </Button>
                    </Form>
                    <ReturnToLoginLink
                        icon="arrow-left"
                        color="#fff"
                        fontSize="19px"
                        onPress={(): void => navigation.navigate('Login')}
                    >
                        I already have an account
                    </ReturnToLoginLink>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Register;
