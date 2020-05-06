import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    border: none;
    height: 58px;
    margin-top: 10px;
    padding: 18px 16px;
    border-radius: 12px;
    background: linear-gradient(135deg, #000, #0f0f0f);

    &:hover {
        background: linear-gradient(135deg, #000, #0f0f0f 130%);
    }
`;
