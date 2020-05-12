import React, { useCallback, useRef } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    View,
    TextInput,
    Alert,
} from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackgroundText from '../../components/BackgroundText';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.png';
import {
    Container,
    Title,
    ForgotPasswordLink,
    CreateAccountLink,
} from './styles';

interface LoginFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

    const handleLogin = useCallback(async (data: LoginFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('You must enter an email')
                    .email('Invalid email format'),
                password: Yup.string().required('You must enter a password'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // await login({
            //     email: data.email,
            //     password: data.password,
            // });

            // history.push('/dashboard');
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error);

                formRef.current?.setErrors(errors);
            } else {
                Alert.alert('Something went wrong', "Couldn't login");
            }
        }
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
                        <Input
                            name="email"
                            icon="mail"
                            placeholder="Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={(): void => {
                                passwordInputRef.current?.focus();
                            }}
                        />
                        <Input
                            ref={passwordInputRef}
                            name="password"
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            returnKeyType="send"
                            onSubmitEditing={(): void => {
                                formRef.current?.submitForm();
                            }}
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
