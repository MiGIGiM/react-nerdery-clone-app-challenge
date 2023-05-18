import styled from 'styled-components';

type Props = {
    width?: string;
    center?: boolean;
};

export const StyledButton = styled.button<Props>`
    color: black;
    background-color: ${({ theme }) => theme.colors.accent};
    width: ${({ width }) => width || '324px'};
    border-radius: 500px;
    font-weight: 700;
    height: 48px;
    text-align: center;
    transition: transform ease-in-out 200ms;
    vertical-align: middle;
    ${({ center }) => center && 'margin: 0 auto;'}
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    font-family: 'Gotham';

    &:hover {
        transform: scale(1.1);
    }

    &:focus {
        border: 3px black solid;
        outline: 2px solid white;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
        font-size: 16px;
    }
`;
