import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '500px',
    },
    colors: {
        accent: '#1ed760',
        secondary: '#fffff',
        primary: '#1DB954',
        error: 'rgb(233, 20, 41)',
        error_content: 'rgb(241, 94, 108)',
        bg: '#191919',
    },
    breakpoints: {
        sm: '(min-width: 320px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 2560px)',
    },
};

export { darkTheme };
