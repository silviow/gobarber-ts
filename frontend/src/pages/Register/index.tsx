import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, BackgroundImage } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import BackgroundText from '../../components/BackgroundText';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('You must enter a name'),
                email: Yup.string()
                    .required('You must enter an email')
                    .email('Invalid email format'),
                password: Yup.string()
                    .required('You must enter a password')
                    .min(8, 'Password must be at least 8 characters'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (error) {
            const errors = getValidationErrors(error);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <BackgroundImage />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <BackgroundText />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Join us</h1>
                    <Input name="name" icon={FiUser} placeholder="Name" />
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        icon={FiLock}
                        placeholder="Password"
                    />
                    <Button type="submit">Create an account</Button>
                </Form>
                <CustomLink to="/" icon={FiArrowLeft} iconSize={20}>
                    I already have an account
                </CustomLink>
            </Content>
        </Container>
    );
};

export default Register;
