import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, BackgroundImage } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import BackgroundText from '../../components/BackgroundText';
import logoImg from '../../assets/logo.svg';

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <BackgroundText />
                <form>
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
                </form>
                <CustomLink to="/register" icon={FiLogIn} iconSize={20}>
                    Create an account
                </CustomLink>
            </Content>
            <BackgroundImage />
        </Container>
    );
};

export default Login;
