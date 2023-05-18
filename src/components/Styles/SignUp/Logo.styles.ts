import styled from 'styled-components';

export const StyledLogo = styled.a`
    display: block;
    width: fit-content;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 32px;

    & > img {
        width: 87.75px;

        @media ${(props) => props.theme.breakpoints.md} {
            width: 130px;
        }
    }
`;
