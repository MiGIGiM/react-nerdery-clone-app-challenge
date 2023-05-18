import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './components/Styles/themes/dark-theme';
import { StyledGlobal } from './components/Styles/Global.styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <StyledGlobal />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
