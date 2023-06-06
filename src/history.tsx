import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthorizationContextProvider } from './context/AuthorizationContext';
import Playlist from './pages/Playlists/Playlists';
import Search from './pages/Search/Search';
import ErrorBoundary from './components/ErrorBOundary';
import { NotFound } from './components/NotFound';
import Liked from './pages/Liked/Liked';

const history = createBrowserRouter([
    {
        path: '/login',
        element: (
            <AuthorizationContextProvider>
                <Login />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/signup',
        element: (
            <AuthorizationContextProvider>
                <SignUp />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/',
        element: (
            <AuthorizationContextProvider>
                <Home />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '/playlist/:playlistId',
        element: (
            <ErrorBoundary>
                <AuthorizationContextProvider>
                    <Playlist />
                </AuthorizationContextProvider>
            </ErrorBoundary>
        ),
    },
    {
        path: '/search/*',
        element: (
            <AuthorizationContextProvider>
                <Search />
            </AuthorizationContextProvider>
        ),
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/liked',
        element: (
            <AuthorizationContextProvider>
                <Liked />
            </AuthorizationContextProvider>
        ),
    },
]);

export default history;
