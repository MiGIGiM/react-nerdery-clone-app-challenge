import styled from 'styled-components';

export const StyledSignUpContainer = styled.div`
    color: white;
    width: clamp(327px, 100%, 450px);
    margin: 0 auto;
    padding: 0 24px;
    margin-bottom: 10rem;

    & > h2 {
        box-sizing: border-box;
        text-align: center;
        line-height: 36px;
        letter-spacing: -0.04em;
        font-size: 2em;
        padding-bottom: 28px;

        @media ${(props) => props.theme.breakpoints.md} {
            font-size: 1.75em;
        }
    }
`;
