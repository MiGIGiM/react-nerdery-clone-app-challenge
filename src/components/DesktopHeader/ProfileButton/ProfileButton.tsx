import { useEffect, useRef, useState } from 'react';
import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import styled from 'styled-components';
import { useClickOutside } from '../../../hooks/useClickOutside';

const StyledProfileButton = styled.button`
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-inline: 10px;
    padding-block: 12px;
    border-radius: 0.25rem;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const StyledProfileContainer = styled.div`
    align-self: flex-start;
    position: relative;
    width: fit-content;
`;

const StyledProfileMenu = styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
`;

const StyledProfileMenuButton = styled.button`
    padding: 10px;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    width: 100%;

    &:hover {
        background-color: #282828;
    }
`;

const ProfileButton = () => {
    const { user, logout } = useAuthorizationContext();
    const [isOpen, setIsOpen] = useState(false);
    const [menuRef] = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    return (
        <StyledProfileContainer>
            <StyledProfileButton
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <StyledImg
                    src="https://source.unsplash.com/user/wsanter"
                    alt={user?.name}
                />
                <span>{user?.name}</span>
            </StyledProfileButton>
            {isOpen && (
                <StyledProfileMenu ref={menuRef}>
                    <StyledProfileMenuButton
                        onClick={() => {
                            logout();
                            setIsOpen(false);
                        }}
                    >
                        Log out
                    </StyledProfileMenuButton>
                </StyledProfileMenu>
            )}
        </StyledProfileContainer>
    );
};

export default ProfileButton;
