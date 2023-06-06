import { useAuthorizationContext } from '../../context/AuthorizationContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProfileButton } from './ProfileButton';

interface Props {
    transparent?: boolean;
    hasChildren?: boolean;
}

const StyledHeader = styled.header<Props>`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #121212;
    color: white;
    display: flex;
    padding-block: 10px;
    align-items: flex-start;
    padding-inline: 20px;

    display: flex;
    justify-content: ${({ hasChildren }) =>
        hasChildren ? 'space-between' : 'end'};
    align-items: center;
`;

const StyledButton = styled(Link)`
    background-color: transparent;
    border-radius: 500px;
    padding: 8px 32px;
    cursor: pointer;
    color: gray;

    &:hover {
        color: white;
    }

    :last-child {
        background-color: white;
        color: black;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const DesktopHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { isAuth, user } = useAuthorizationContext();
    return (
        <StyledHeader>
            {children}
            <>
                {isAuth && user !== null ? (
                    <ProfileButton />
                ) : (
                    <div>
                        <StyledButton to="/signup">Sign In</StyledButton>
                        <StyledButton to="/login">Log In</StyledButton>
                    </div>
                )}
            </>
        </StyledHeader>
    );
};

export default DesktopHeader;
