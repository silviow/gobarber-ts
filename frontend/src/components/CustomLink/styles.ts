import styled from 'styled-components';

export const Container = styled.div`
    z-index: 2;

    a {
        color: #fff;
        display: flex;
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
