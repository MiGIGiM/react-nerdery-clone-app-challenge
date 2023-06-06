import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;

    row-gap: 32px;

    img {
        width: 60px;
        aspect-ratio: 1;
    }

    h1 {
        margin: 0;
    }

    p {
        color: #a7a7a7;
        margin-bottom: 40px;
    }
`;

const StyledLinkButton = styled(Link)`
    background-color: white;
    padding: 10px 20px;
    border-radius: 500px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
`;

const NotFound = () => (
    <StyledNotFoundContainer>
        <img
            src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
            alt=""
        />
        <span>
            <h1>Page not available</h1>
            <p>Something went wrong, please try again later.</p>
        </span>
        <StyledLinkButton to="/">Home</StyledLinkButton>
    </StyledNotFoundContainer>
);

export default NotFound;
