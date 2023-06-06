import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: black;
    font-family: 'Gotham';
    width: clamp(320px, 100%, 734px);
    height: 572px;
    border-radius: 8px;
    margin-right: auto;
    margin-left: auto;
    color: white;
    padding: 38px 120px;
    margin-top: 25px;
    overflow: hidden;

    & > h1 {
        color: white;
        width: 100%;
        font-size: clamp(1em, 2em, 3em);
        margin-top: 80px;
        margin-bottom: 40px;
        text-align: center;
    }

    & > div {
        margin: 0 auto;
        display: block;
        width: fit-content;

        & > * {
            margin-block-end: 1rem;
        }
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
        padding: 10px 0;
        height: auto;
    }
`;
