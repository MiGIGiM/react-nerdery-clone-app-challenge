import styled from 'styled-components';

export const StyledSignUp = styled.form`
    display: block;
    margin: 0 auto;
    & > h2 {
        display: block;
        box-sizing: border-box;
        padding-bottom: 20px;
        text-align: center;
        font-size: 1.25em;

        @media ${(props) => props.theme.breakpoints.md} {
            font-size: 1em;
        }
    }

    > div {
        margin-bottom: 24px;
    }
`;
