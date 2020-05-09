import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, BackgroundImage } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import BackgroundText from '../../components/BackgroundText';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

interface LoginFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { login } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: LoginFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('You must enter an email')
                        .email('Invalid email format'),
                    password: Yup.string().required(
                        'You must enter a password',
                    ),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await login({
                    email: data.email,
                    password: data.password,
                });

                history.push('/dashboard');
            } catch (error) {
                if (error instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(error);

                    formRef.current?.setErrors(errors);
                } else {
                    addToast({
                        type: 'error',
                        title: 'Something went wrong',
                        description: "Couldn't login",
                    });
                }
            }
        },
        [history, login, addToast],
    );

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <BackgroundText />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Welcome</h1>
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        icon={FiLock}
                        placeholder="Password"
                    />
                    <Button type="submit">Login</Button>
                    <CustomLink to="/forgot">I forgot my password</CustomLink>
                </Form>
                <CustomLink to="/register" icon={FiLogIn} iconSize={20}>
                    Create an account
                </CustomLink>
            </Content>
            <BackgroundImage />
        </Container>
    );
};

export default Login;
