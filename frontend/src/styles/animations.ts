import { keyframes } from 'styled-components';

export const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(30%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
