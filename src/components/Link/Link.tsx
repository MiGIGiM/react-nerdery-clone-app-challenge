import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface Props extends StyleProps {
    to: string;
    label: string;
}

interface StyleProps {
    fontSize?: string;
    spacing?: string;
}

const StyledLink = styled(RouterLink)<StyleProps>`
    display: block;
    color: white;
    font-size: ${({ fontSize }) => fontSize || '20px'};
    font-weight: 700;
    font-stretch: 100%;
    margin-bottom: ${({ spacing }) => spacing || '32px'};
    user-select: none;

    transition: transform 200ms ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateX(-40px);
    }
`;

const Link: React.FunctionComponent<Props> = ({ to, label, fontSize }) => (
    <StyledLink to={to} fontSize={fontSize}>
        {label}{' '}
    </StyledLink>
);

export default Link;
