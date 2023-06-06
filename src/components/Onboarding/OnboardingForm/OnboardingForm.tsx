import { FormEvent, useState } from 'react';
import { useOnboarding } from '../../../hooks/useOnboarding';
import CategoryForm from './steps/CategoryForm';
import ArtistForm from './steps/ArtistsForm';
import { MdNavigateNext, MdOutlineDone } from 'react-icons/md';
import styled from 'styled-components';
import { StyledFlexContainer } from '../../../components/Styles/shared/FlexContainer.styles';

const StyledNavButtons = styled.button`
    all: unset;
    border-radius: 50%;
    outline: 1px solid white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        outline: transparent;
        background-color: ${({ theme }) => theme.colors.primary};
        color: black;
    }
`;

interface Props {
    onClose: () => void;
}

export type OnBoardingFormData = {
    categories: string[];
    artists: string[];
};

const INITIAL_DATA: OnBoardingFormData = {
    categories: [],
    artists: [],
};

const OnboardingForm: React.FC<Props> = ({ onClose }) => {
    const [data, setData] = useState<OnBoardingFormData>(INITIAL_DATA);

    const handleFieldUpdate = (field: Partial<OnBoardingFormData>) => {
        setData((prev) => ({ ...prev, ...field }));
    };
    const { currentStep, next, isLastStep } = useOnboarding([
        <CategoryForm {...data} updateField={handleFieldUpdate} />,
        <ArtistForm {...data} updateField={handleFieldUpdate} />,
    ]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!isLastStep) {
            next();
            return;
        }

        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            {currentStep}
            <StyledFlexContainer
                columnGap="12px"
                justifyContent="flex-end"
                marginTop="20px"
                marginBottom="18px"
                width="100%"
            >
                <StyledNavButtons>
                    {isLastStep ? <MdOutlineDone /> : <MdNavigateNext />}
                </StyledNavButtons>
            </StyledFlexContainer>
        </form>
    );
};

export default OnboardingForm;
