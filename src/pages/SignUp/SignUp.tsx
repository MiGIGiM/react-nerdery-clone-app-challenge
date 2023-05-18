import React from 'react';
import { StyledSignUpContainer } from '../../components/Styles/SignUp/SignUpContainer.styles';
import { StyledLogo } from '../../components/Styles/SignUp/Logo.styles';
import { StyledSignUp } from '../../components/Styles/SignUp/SignUpForm.styles';
import { StyledInput } from '../../components/Styles/Inputs/Input.styles';
import { StyledLabel } from '../../components/Styles/Label.styles';
import { ErrorLabel } from '../../components/ErrorLabel';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { RadioButton } from '../../components/RadioButton';
import { StyledButton } from '../../components/Styles/Inputs/Button.styles';
import { CheckBox } from '../../components/CheckBox';
import { StyledLink } from '../../components/Styles/Link.Styles';

const SignUp: React.FunctionComponent = () => {
    return (
        <StyledSignUpContainer>
            <StyledLogo href="/">
                <img src="/svg/logo-extended.svg" alt="" />
            </StyledLogo>
            <h2>Sign up for free to start listening.</h2>
            <StyledSignUp>
                <h2>Sign up with your email address</h2>

                <div>
                    <StyledLabel htmlFor="email">
                        What's your email?
                    </StyledLabel>
                    <StyledInput
                        id="email"
                        type="text"
                        backgroundColor="transparent"
                        placeholder="Enter your email"
                    />
                    <ErrorLabel message="You need to enter your email." />
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
                    />
                    <ErrorLabel message="You need to enter a password." />
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
                    />
                    <ErrorLabel message="Enter a name for your profile." />
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
                            />
                        </div>
                        <div>
                            <StyledLabel htmlFor="month">Month</StyledLabel>
                            <StyledInput
                                id="month"
                                type="text"
                                backgroundColor="transparent"
                                placeholder="Month"
                                flexGrow="1"
                            />
                        </div>
                        <div>
                            <StyledLabel htmlFor="year">Year</StyledLabel>
                            <StyledInput
                                id="year"
                                type="text"
                                backgroundColor="transparent"
                                placeholder="YYYY"
                                width="90px"
                            />
                        </div>
                    </StyledFlexContainer>
                    <ErrorLabel message="Enter a valid day of the month." />
                    <ErrorLabel message="Select your birth month." />
                    <ErrorLabel message="Enter a valid year." />
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
                        <RadioButton value="Male" />
                        <RadioButton value="Female" />
                        <RadioButton value="Non-binary" />
                        <RadioButton value="Other" />
                        <RadioButton value="Prefer no to say" />
                    </StyledFlexContainer>
                    <ErrorLabel message="Select your gender." />
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
                    <a href="/sign-in">Login</a>
                </StyledLink>
            </StyledSignUp>
        </StyledSignUpContainer>
    );
};

export default SignUp;
