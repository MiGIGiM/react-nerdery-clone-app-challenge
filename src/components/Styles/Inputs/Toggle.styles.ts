import styled from 'styled-components';

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: white;
    > span {
        font-size: 14px;
    }
`;

export const Switch = styled.div`
    position: relative;
    width: 30px;
    height: 16px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 35px;
        top: 50%;
        left: 2px;
        background: black;
        transform: translate(0, -50%);
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
        height: 10px;
    }
`;

export const SwitchInput = styled.input`
    display: none;

    &:checked + ${Switch} {
        background: ${({ theme }) => theme.colors.accent};

        &:before {
            transform: translate(14px, -50%);

            @media ${({ theme }) => theme.breakpoints.sm} {
                transform: translate(20px, -50%);
            }
        }
    }
`;
