import styled from 'styled-components';
import backgroundImg from '../../assets/register_background.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    max-width: 700px;
    align-items: center;
    place-content: center;
    flex-direction: column;

    img {
        z-index: 2;
        width: 300px;
        margin-top: -55px;
    }

    form {
        z-index: 2;
        width: 300px;
        display: flex;
        margin: 100px 0;
        text-align: center;
        flex-direction: column;

        h1 {
            margin-bottom: 25px;
        }

        a {
            color: #999591;
            font-size: 15px;
        }
    }
`;

export const BackgroundImage = styled.div`
    flex: 1;
    z-index: 2;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;
