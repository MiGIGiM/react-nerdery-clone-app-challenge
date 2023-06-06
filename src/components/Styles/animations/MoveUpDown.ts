import { keyframes } from 'styled-components';

export const MoveUpDown = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10%);
    }
  `;
