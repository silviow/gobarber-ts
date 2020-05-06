import styled from 'styled-components';

export const Container = styled.span`
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
`;
