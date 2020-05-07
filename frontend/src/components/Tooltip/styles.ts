import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        left: 50%;
        opacity: 0;
        color: #fff;
        width: 200px;
        padding: 10px;
        font-size: 14px;
        font-weight: 500;
        position: absolute;
        border-radius: 8px;
        visibility: hidden;
        transition: opacity 0.3s;
        bottom: calc(100% + 10px);
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);

        &::before {
            top: 100%;
            left: 50%;
            content: '';
            position: absolute;
            border-style: solid;
            transform: translateX(-50%);
            border-width: 6px 6px 0 6px;
            border-color: rgba(0, 0, 0, 0.9) transparent;
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;
