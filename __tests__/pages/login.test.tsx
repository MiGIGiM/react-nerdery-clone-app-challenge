import * as React from 'react';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../src/pages/Login/Login';
import { darkTheme } from '../../src/components/Styles/themes/dark-theme';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { useAuthContext } from '../../src/context/AuthContext';

const authWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { setError } = useAuthContext();

    React.useEffect(() => {
        setError('Incorrect username or password.');
    }, []);

    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({
    children,
}) => <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;

describe('Login page', () => {
    it('should render properly', () => {
        render(<Login />, { wrapper: Wrapper });
        expect(
            screen.getByRole('heading', {
                name: /log in to spotify/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('textbox', { name: /email/i }),
        ).toBeInTheDocument();

        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: /log in/i }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('link', {
                name: /sign up for spotify/i,
            }),
        ).toBeInTheDocument();
    });

    it('should show error when inputs are empty', async () => {
        render(<Login />, { wrapper: Wrapper });
        const loginButton = screen.getByRole('button', { name: /log in/i });

        userEvent.click(loginButton);

        expect(
            await screen.findByText(
                /Please enter your username or email address./i,
            ),
        ).toBeVisible();

        expect(
            await screen.findByText(/Please enter your password./i),
        ).toBeVisible();
    });

    it('should show error when user is invalid', async () => {
        render(<Login />, { wrapper: authWrapper });
        const errrorMessage = /Incorrect username or password./i;

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        await userEvent.type(emailInput, 'john@example.com');
        await userEvent.type(passwordInput, 'Password123');

        fireEvent.click(loginButton);

        expect(await screen.findByTestId('error-banner')).toBeVisible();
        screen.debug();
    });
});
