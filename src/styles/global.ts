import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body, input, textarea, button {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
    }
    `;
