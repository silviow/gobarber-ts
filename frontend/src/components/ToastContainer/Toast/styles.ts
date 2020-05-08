/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
    type?: 'default' | 'success' | 'error';
}

const toastVariations = {
    default: css`
        background: rgba(0, 0, 0, 0.9);
    `,
    success: css`
        background: rgba(127, 184, 0, 0.9); /* #679436 */
    `,
    error: css`
        background: rgba(221, 28, 26, 0.9); /* #dd1c1a */
    `,
};

export const ToastBalloon = styled(animated.div)<ToastProps>`
    color: #fff;
    width: 300px;
    display: flex;
    position: relative;
    border-radius: 10px;
    flex-direction: column;
    padding: 16px 16px 13px 16px;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.1);

    ${(props) => toastVariations[props.type || 'default']}

    & + div {
        margin-top: 8px;
    }

    #header {
        flex: 1;
        display: flex;
        justify-content: space-between;

        #title {
            display: flex;

            > svg {
                margin-right: 10px;
            }
        }

        button {
            opacity: 0.6;
            border: none;
            color: inherit;
            background: transparent;
        }
    }

    p {
        font-size: 15px;
        margin-top: 8px;
        line-height: 19px;
    }
`;
