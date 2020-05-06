import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(to top, #000, #090909);
    }

    body, input, button {
        color: #fff;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
`;
