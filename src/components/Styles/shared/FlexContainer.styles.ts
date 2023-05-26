import styled from 'styled-components';

type Props = {
    flexDirection?: 'row' | 'column';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    columnGap?: string;
    rowGap?: string;
};

export const StyledFlexContainer = styled.div<Props>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'flex-start'};
    flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
    column-gap: ${({ columnGap }) => columnGap || '0'};
    row-gap: ${({ rowGap }) => rowGap || '0'};
`;
