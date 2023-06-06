import styled from 'styled-components';
import { MdSearch, MdOutlineCottage } from 'react-icons/md';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

interface Props {
    active: string;
}

const StyledLink = styled(Link)<Props>`
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${({ active }) => (!active ? 'lightgray' : 'white')};
    padding: 10px 12px;

    &:hover {
        background-color: #282828;
    }
`;

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <StyledList>
            <StyledLink to="/" active={(pathname === '/').toString()}>
                <MdOutlineCottage />
                <span>Home</span>
            </StyledLink>
            <StyledLink
                to="/search"
                active={(pathname === '/search').toString()}
            >
                <MdSearch />
                <span>Search</span>
            </StyledLink>
        </StyledList>
    );
};

export default Navbar;
