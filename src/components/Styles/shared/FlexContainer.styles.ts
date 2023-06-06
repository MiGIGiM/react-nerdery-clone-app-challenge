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
    marginTop?: string;
    marginBottom?: string;
    overflowX?: string;
    width?: string;
};

export const StyledFlexContainer = styled.div<Props>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'flex-start'};
    flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
    column-gap: ${({ columnGap }) => columnGap || '0'};
    row-gap: ${({ rowGap }) => rowGap || '0'};
    margin-top: ${({ marginTop }) => marginTop || '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
    overflow-x: ${({ overflowX }) => overflowX || 'visible'};
    width: ${({ width }) => width || 'auto'};

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`;
