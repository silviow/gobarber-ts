import styled from 'styled-components/native';
import CustomLink from '../../components/CustomLink';

export const Container = styled.View`
    flex: 1;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    z-index: 2;
    color: #fff;
    font-size: 24px;
    margin: 60px 0 30px;
    font-family: 'Roboto-Medium';
`;

export const ForgotPasswordLink = styled(CustomLink)`
    margin-top: 30px;
`;

export const CreateAccountLink = styled(CustomLink)`
    margin-top: 60px;
`;
