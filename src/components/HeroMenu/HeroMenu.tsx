import { Link } from '../Link';
import styled from 'styled-components';
const mainLinks = [
    {
        to: '/login',
        label: 'Log in',
    },
    {
        to: '/signup',
        label: 'Sign up',
    },
];

const shortLinks = [
    {
        to: '/premium',
        label: 'Premium',
    },
    {
        to: '/download',
        label: 'Download',
    },
    {
        to: '/help',
        label: 'Help',
    },
    {
        to: '/privacy',
        label: 'Privacy',
    },
    {
        to: '/terms',
        label: 'Terms',
    },
];

const StyledSeparator = styled.div`
    margin: 52px 0;
    border: 1px solid white;
    width: 16px;
`;

const HeroMenu = () => (
    <>
        {mainLinks.map((link) => (
            <Link key={link.to} to={link.to} label={link.label} />
        ))}
        <StyledSeparator />
        {shortLinks.map((link) => (
            <Link
                key={link.to}
                to={link.to}
                label={link.label}
                fontSize="14px"
                spacing="10px"
            />
        ))}
    </>
);

export default HeroMenu;
