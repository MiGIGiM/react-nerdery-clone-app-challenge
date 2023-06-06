import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    min-width: 915px;
    min-height: 500px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
`;

export const StepTitle = styled.h2`
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
`;
