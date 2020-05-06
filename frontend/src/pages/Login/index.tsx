import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <span>
                    go
                    <br />
                    bar
                    <br />
                    ber
                </span>
                <form>
                    <h1>Welcome</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <Link to="/forgot">I forgot my password</Link>
                </form>
                <Link to="/register">
                    <FiLogIn size={20} color="#fff" />
                    Create an account
                </Link>
            </Content>
            <Background />
        </Container>
    );
};

export default Login;
