import React, { useCallback, useRef } from 'react';
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
import {
    Container,
    Title,
    ForgotPasswordLink,
    CreateAccountLink,
} from './styles';
import logoImg from '../../assets/logo.png';
import BackgroundText from '../../components/BackgroundText';

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    const handleLogin = useCallback((data: object) => {
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
                        <Title>Welcome</Title>
                    </View>
                    <Form ref={formRef} onSubmit={handleLogin}>
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
                            Login
                        </Button>
                    </Form>
                    <ForgotPasswordLink
                        fontSize="17px"
                        onPress={(): void => {
                            console.log('"I forgot my password" pressed');
                        }}
                    >
                        I forgot my password
                    </ForgotPasswordLink>
                    <CreateAccountLink
                        icon="log-in"
                        color="#fff"
                        fontSize="19px"
                        onPress={(): void => navigation.navigate('Register')}
                    >
                        Create an account
                    </CreateAccountLink>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
