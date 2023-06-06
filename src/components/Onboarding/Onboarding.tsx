import { useClickOutside } from '../../hooks/useClickOutside';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { OnboardingForm } from './OnboardingForm';
import { useAuthorizationContext } from '../../context/AuthorizationContext';

const StyledOnboardingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000070;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledOnboardingDialog = styled.div`
    background-color: black;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #282828;
`;

const Onboarding = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [showOnboarding, setShowOnboarding] = useState(
        searchParams.has('new'),
    );
    const [dialogRef] = useClickOutside<HTMLDivElement>(() => handleClose());

    const handleClose = () => {
        setShowOnboarding(false);
        setSearchParams(new URLSearchParams());
    };

    if (!showOnboarding) {
        return null;
    }

    return (
        <StyledOnboardingContainer>
            <StyledOnboardingDialog ref={dialogRef}>
                <OnboardingForm onClose={handleClose} />
            </StyledOnboardingDialog>
        </StyledOnboardingContainer>
    );
};

export default Onboarding;
