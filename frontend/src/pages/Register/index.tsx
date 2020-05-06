import React from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, BackgroundImage } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import BackgroundText from '../../components/BackgroundText';
import logoImg from '../../assets/logo.svg';

const Register: React.FC = () => {
    return (
        <Container>
            <BackgroundImage />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <BackgroundText />
                <form>
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
                </form>
                <CustomLink to="/" icon={FiArrowLeft} iconSize={20}>
                    I already have an account
                </CustomLink>
            </Content>
        </Container>
    );
};

export default Register;
