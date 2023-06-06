type User = {
    id: number;
    email: string;
    name: string;
    birth_date: string;
    gender: string;
};

type UserCreate = {
    email: string;
    name: string;
    birth_date: string;
    gender: string;
    password: string;
};

type UserLogin = Omit<User, 'name'>;
