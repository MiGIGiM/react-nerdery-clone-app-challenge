import React from 'react';
import { RouterProvider } from 'react-router';
import history from './history';
import { AuthContextProvider } from './context/AuthContext';

const App = () => <RouterProvider router={history} />;

export default App;
