import React from 'react';
import { StyledSignUpContainer } from '../../components/Styles/SignUp/SignUpContainer.styles';
import { StyledLogo } from '../../components/Styles/SignUp/Logo.styles';
import { StyledSignUp } from '../../components/Styles/SignUp/SignUpForm.styles';
import { StyledInput } from '../../components/Styles/Inputs/Input.styles';
import { StyledLabel } from '../../components/Styles/Label.styles';
import { ErrorLabel } from '../../components/ErrorLabel';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { StyledButton } from '../../components/Styles/Inputs/Button.styles';
import { CheckBox } from '../../components/CheckBox';
import { StyledLink } from '../../components/Styles/Link.Styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
    StyledRadioButtonLabel,
    StyledRadioButton,
} from '../../components/Styles/RadioButton/RadioButton.styles';
import { StyledDropdown } from '../../components/Styles/Inputs/Dropdown.styles';
import { useAuthorizationContext } from '../../context/AuthorizationContext';
import { ErrorBanner } from '../../components/ErrorBanner';

const months = [
    { value: '00', label: 'Month' },
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

const genders = ['Male', 'Female', 'Non-binary', 'Other', 'Prefer not to say'];

type FormValues = {
    email: string;
    password: string;
    profile_name: string;
    day: string;
    month: string;
    year: string;
    gender: string;
};

const SignUp: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const { signup, error } = useAuthorizationContext();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const newUser = {
            email: data.email,
            password: data.password,
            name: data.profile_name,
            birth_date: `${data.year}-${data.month}-${data.day}`,
            gender: data.gender,
        };

        await signup(newUser);
    };

    return (
        <StyledSignUpContainer>
            <StyledLogo href="/">
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledLogo>
            <h2>Sign up for free to start listening.</h2>
            <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign up with your email address</h2>
                {error && <ErrorBanner message={error} />}
                <div>
                    <StyledLabel htmlFor="email">
                        What's your email?
                    </StyledLabel>
                    <StyledInput
                        id="email"
                        type="text"
                        backgroundColor="transparent"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: true,
                            pattern:
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                        })}
                    />
                    {errors.email && (
                        <ErrorLabel message="You need to enter your email." />
                    )}
                </div>
                <div>
                    <StyledLabel htmlFor="password">
                        Create a password
                    </StyledLabel>
                    <StyledInput
                        id="password"
                        type="password"
                        backgroundColor="transparent"
                        placeholder="Create a password"
                        {...register('password', { required: true })}
                    />
                    {errors.password && (
                        <ErrorLabel message="You need to enter a password." />
                    )}
                </div>
                <div>
                    <StyledLabel htmlFor="profile_name">
                        What should we call you?
                    </StyledLabel>
                    <StyledInput
                        id="profile_name"
                        type="text"
                        backgroundColor="transparent"
                        placeholder="Enter a profile name"
                        {...register('profile_name', { required: true })}
                    />
                    {errors.profile_name && (
                        <ErrorLabel message="Enter a name for your profile." />
                    )}
                </div>
                <div>
                    <StyledLabel htmlFor="date-of-birth">
                        What's your date of birth?
                    </StyledLabel>
                    <StyledFlexContainer
                        id="date-of-birth"
                        columnGap="30px"
                        marginTop="12px"
                        marginBottom="24px"
                    >
                        <div>
                            <StyledLabel htmlFor="day">Day</StyledLabel>
                            <StyledInput
                                id="day"
                                type="text"
                                backgroundColor="transparent"
                                placeholder="DD"
                                width="90px"
                                {...register('day', {
                                    required: true,
                                    min: 1,
                                    max: 31,
                                    pattern: /[0-9]/,
                                    maxLength: 2,
                                })}
                            />
                        </div>
                        <div
                            style={{
                                flexGrow: 2,
                            }}
                        >
                            <StyledLabel htmlFor="month">Month</StyledLabel>
                            <StyledDropdown
                                id="month"
                                flexGrow="12"
                                width="100%"
                                {...register('month', {
                                    required: true,
                                    validate: (value) => value !== '00',
                                })}
                            >
                                {months.map((month) => (
                                    <option
                                        key={month.label}
                                        value={month.value}
                                    >
                                        {month.label}
                                    </option>
                                ))}
                            </StyledDropdown>
                        </div>
                        <div>
                            <StyledLabel htmlFor="year">Year</StyledLabel>
                            <StyledInput
                                id="year"
                                type="text"
                                backgroundColor="transparent"
                                placeholder="YYYY"
                                width="90px"
                                {...register('year', {
                                    required: true,
                                    min: 1900,
                                    max: 2021,
                                    pattern: /[0-9]/,
                                    maxLength: 4,
                                })}
                            />
                        </div>
                    </StyledFlexContainer>
                    {errors.day && (
                        <ErrorLabel message="Enter a valid day of the month." />
                    )}
                    {errors.month && (
                        <ErrorLabel message="Select your birth month." />
                    )}
                    {errors.year && (
                        <ErrorLabel message="Enter a valid year." />
                    )}
                </div>
                <div>
                    <StyledLabel htmlFor="date-of-birth">
                        What's your gender?
                    </StyledLabel>
                    <StyledFlexContainer
                        marginTop="20px"
                        flexWrap="wrap"
                        columnGap="14px"
                        rowGap="12px"
                    >
                        {genders.map((gender) => (
                            <StyledRadioButtonLabel key={gender}>
                                <StyledRadioButton
                                    type="radio"
                                    value={gender}
                                    {...register('gender', {
                                        required: true,
                                    })}
                                />
                                <span>{gender}</span>
                            </StyledRadioButtonLabel>
                        ))}
                    </StyledFlexContainer>
                    {errors.gender && (
                        <ErrorLabel message="Select your gender." />
                    )}
                </div>
                <div>
                    <CheckBox label="I would prefer not to receive marketing messages from Spotify" />
                    <CheckBox label="Share my registration data with Spotify's content providers for marketing purposes." />
                </div>
                <StyledButton width="158px" center>
                    Sign up
                </StyledButton>
                <StyledLink color="lightgreen">
                    Have an account?
                    <a href="/login">Login</a>
                </StyledLink>
            </StyledSignUp>
        </StyledSignUpContainer>
    );
};

export default SignUp;
