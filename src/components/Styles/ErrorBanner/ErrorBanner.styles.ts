import styled from 'styled-components';

export const StyledErrorBanner = styled.p`
    background-color: ${({ theme }) => theme.colors.error};
    padding: 20px 10px;
    display: inline-flex;
    width: 100%;
    align-items: center;
    column-gap: 10px;
`;
