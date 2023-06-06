import { mockedApiInstance } from './index';

export interface LoginVM {
    email: string;
    password: string;
}

interface AuthResponse {
    accessToken: string;
    user: User;
}

export const login = async (user: LoginVM): Promise<AuthResponse> => {
    return mockedApiInstance.post('/login', user);
};

export const register = async (user: UserCreate): Promise<AuthResponse> => {
    return mockedApiInstance.post('/register', user);
};
