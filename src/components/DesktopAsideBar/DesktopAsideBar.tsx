import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Playlists } from './Playlists';

const StyledNav = styled.nav`
    width: 100%;
    height: 100%;
    color: white;
    box-sizing: border-box;
    background-color: black;
    flex-direction: column;
    display: flex;
    row-gap: 10px;
`;

const StyledContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: #121212;
    padding-top: 10px;
    padding-bottom: 10px;

    &:last-child {
        flex-grow: 1;
    }
`;

const DesktopAsideBar = () => {
    return (
        <StyledNav>
            <StyledContainer>
                <Navbar />
            </StyledContainer>
            <StyledContainer>
                <Playlists />
            </StyledContainer>
        </StyledNav>
    );
};

export default DesktopAsideBar;
