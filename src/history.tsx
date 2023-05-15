import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login/Login';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const history = createBrowserRouter([
    {
        path: '/login',
        element: (
            <AuthContextProvider>
                <Login />
            </AuthContextProvider>
        ),
    },
]);

export default history;
