import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: {
            md: string;
            sm: string;
            lg: string;
            full: string;
        };

        colors: {
            primary: string;
            secondary: string;
            accent: string;
            error: string;
            error_content: string;
            bg: string;
        };

        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
