type AuthContext = {
    user: User | null;
    login: (user: UserLogin) => void;
    logout: () => void;
    error: string;
    setError: (error: string) => void;
};
