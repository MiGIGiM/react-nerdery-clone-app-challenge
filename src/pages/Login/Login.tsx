import { Resolver, useForm } from 'react-hook-form';
import { StyledButton } from '../../components/Styles/Inputs/Button.styles';
import { StyledForm } from '../../components/Styles/Login/LoginForm.styles';
import { StyledInput } from '../../components/Styles/Inputs/Input.styles';
import { StyledLabel } from '../../components/Styles/Label.styles';
import {
    SwitchLabel,
    Switch,
    SwitchInput,
} from '../../components/Styles/Inputs/Toggle.styles';
import React from 'react';
import { StyledLink } from '../../components/Styles/Link.Styles';
import { StyledHeader } from '../../components/Styles/Login/Header.styles';
import { ErrorLabel } from '../../components/ErrorLabel';
import { ErrorBanner } from '../../components/ErrorBanner';
import { useAuthorizationContext } from '../../context/AuthorizationContext';

type FormValues = {
    email: string;
    password: string;
    remember_me: boolean;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email && values.password ? values : {},
        errors: !values.email
            ? {
                  email: {
                      type: 'required',
                      message: 'Please enter your username or email address.',
                  },
                  password: {
                      type: 'required',
                      message: 'Please enter your password.',
                  },
              }
            : {},
    };
};

const Login: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<FormValues>({
        resolver,
        defaultValues: {
            remember_me: true,
        },
    });
    const { login, error } = useAuthorizationContext();

    const onSubmit = async (data: FormValues) => {
        const loginData = {
            email: data.email,
            password: data.password,
        };

        await login(loginData);
    };

    const manualToggle = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code !== 'Space') return;

        setValue('remember_me', !getValues('remember_me'));
    };

    return (
        <>
            <StyledHeader>
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledHeader>
            <StyledForm role="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Log in to Spotify</h1>
                {error && <ErrorBanner message={error} />}
                <div>
                    <div>
                        <StyledLabel htmlFor="email">
                            Email or username
                        </StyledLabel>
                        <StyledInput
                            data-errors={errors.email !== undefined}
                            id="email"
                            type="text"
                            placeholder="Email or username"
                            {...register('email')}
                        />
                        {errors?.email && (
                            <ErrorLabel message={errors.email.message || ''} />
                        )}
                    </div>
                    <div>
                        <StyledLabel htmlFor="password">Password</StyledLabel>
                        <StyledInput
                            data-errors={errors.password !== undefined}
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...register('password')}
                        />
                        {errors?.password && (
                            <ErrorLabel
                                message={errors.password.message || ''}
                            />
                        )}
                    </div>
                    <SwitchLabel htmlFor="remember_me">
                        <SwitchInput
                            id="remember_me"
                            type="checkbox"
                            {...register('remember_me')}
                        />
                        <Switch tabIndex={0} onKeyDown={manualToggle} />
                        <span>Remember Me</span>
                    </SwitchLabel>
                    <StyledButton type="submit">Log In</StyledButton>
                    <StyledLink>
                        Don't have an account?
                        <a href="/signup">Sign up for Spotify</a>
                    </StyledLink>
                </div>
            </StyledForm>
        </>
    );
};

export default Login;
