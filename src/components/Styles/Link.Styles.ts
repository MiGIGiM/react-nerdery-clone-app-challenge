import styled from 'styled-components';

type Props = {
    color?: string;
};

export const StyledLink = styled.p`
    color: rgb(167, 167, 167);
    padding-top: 20px;
    margin: 0 auto;
    display: block;
    width: fit-content;

    & > a {
        color: ${({ color }: Props) => color || 'white'};
        transition: ease-in-out 200ms;

        ::before {
            content: ' ';
        }

        :hover {
            text-decoration: underline;
        }
    }
`;
