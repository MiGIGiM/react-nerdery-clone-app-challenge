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

    body {
        font-family: 'Gotham', sans-serif;
        overflow-x: hidden;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.bg};
    };
`;

export { StyledGlobal };
