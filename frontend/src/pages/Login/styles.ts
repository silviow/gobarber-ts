import styled from 'styled-components';
import backgroundImg from '../../assets/login_background.jpg';

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

    span {
        z-index: 1;
        color: #0f0f0f;
        font-size: 400px;
        font-weight: 900;
        user-select: none;
        margin-top: -35px;
        line-height: 310px;
        position: absolute;
        text-align: center;
        overflow-y: hidden;
        letter-spacing: -3px;
        text-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        background: linear-gradient(135deg, #000, #060606);
        background-clip: none;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 720px) {
            font-size: 230px;
            line-height: 180px;
        }
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

        input {
            color: #fff;
            width: 100%;
            height: 58px;
            padding: 18px 16px;
            border-radius: 12px;
            background: #232129;
            border: 2px solid #232129;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 10px;
            }
        }

        button {
            width: 100%;
            border: none;
            height: 58px;
            padding: 18px 16px;
            border-radius: 12px;
            margin: 10px 0 28px;
            background: linear-gradient(135deg, #000, #0f0f0f);

            &:hover {
                background: linear-gradient(135deg, #000, #0f0f0f 130%);
            }
        }

        a {
            color: #999591;
            font-size: 15px;
        }
    }

    a {
        z-index: 2;
        color: #fff;
        display: flex;
        margin-top: 3px;
        font-size: 18px;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        transition: transform 0.3s;

        &:hover {
            transform: translateX(5px);
        }

        & + a {
            margin-top: 15px;
        }

        svg {
            margin-right: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    z-index: 2;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;
