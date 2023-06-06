import styled from 'styled-components';

export const StyledDesktopLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr auto;
    height: 100%;
    gap: 0px 10px;
    padding: 10px;
    box-sizing: border-box;
`;

export const StyledMainContentContainer = styled.div`
    background: #121212;
    border-radius: 8px;
    overflow-x: hidden;

    & > * {
        box-sizing: border-box;
    }
`;
