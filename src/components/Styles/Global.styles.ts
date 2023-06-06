import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham.woff') format('woff')
    }

    button {
        all: unset;
        cursor: pointer; 
    }

    a {
        all: unset;
        margin: 0;
        padding: 0;
    }

    body, html, #root {
        font-family: 'Gotham', sans-serif;
        margin: 0;
        background-color: black;
        height: 100%;
    };

    html {
        color-scheme: dark;
    }
`;

export { StyledGlobal };
