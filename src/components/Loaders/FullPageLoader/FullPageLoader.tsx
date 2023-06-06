import { MoveUpDown } from '../../Styles/animations/MoveUpDown';
import styled from 'styled-components';

const StyledSVG = styled.svg`
    width: 40%;

    @media ${({ theme }) => theme.breakpoints.sm} {
        width: 200px;
    }
`;

const StyledCircle = styled.circle`
    :first-child {
        animation: 1.5s ${MoveUpDown} infinite;
    }

    :nth-child(2) {
        animation: 1.5s ${MoveUpDown} infinite;
        animation-delay: 200ms;
    }

    :last-child {
        animation: 1.5s ${MoveUpDown} infinite;
        animation-delay: 400ms;
    }
`;

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FullPageLoader = () => (
    <StyledContainer>
        <StyledSVG viewBox="0 0 40 20">
            <StyledCircle fill="#c4c4c4" cx={10} cy={10} r={2} />
            <StyledCircle fill="#c4c4c4" cx={20} cy={10} r={2} />
            <StyledCircle fill="#c4c4c4" cx={30} cy={10} r={2} />
        </StyledSVG>
    </StyledContainer>
);

export default FullPageLoader;
