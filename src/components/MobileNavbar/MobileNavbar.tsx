import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import {
    StyledNavBarContainer,
    StyledMobileNavbar,
    StyledMenu,
} from './MobileNavbar.styles';
import { HeroMenu } from '../../components/HeroMenu';

const MobileNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <StyledNavBarContainer>
            <StyledMobileNavbar>
                <img src="/svg/logo-extended.svg" alt="" />
                <Hamburger
                    toggle={setToggleMenu}
                    toggled={toggleMenu}
                    color="white"
                    direction="left"
                    size={28}
                />
            </StyledMobileNavbar>
            <StyledMenu aria-expanded={toggleMenu}>
                <HeroMenu />
            </StyledMenu>
        </StyledNavBarContainer>
    );
};

export default MobileNavbar;
