type User = {
    name: string;
    email: string;
    password: string;
};

type UserLogin = Omit<User, 'name'>;
