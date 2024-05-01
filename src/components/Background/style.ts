import styled, { keyframes } from 'styled-components';

const moveAnimation = keyframes`
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`;

export const BackgroundContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffff;
    overflow: hidden;
`;

export const BackgroundSpan = styled.span`
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: ${moveAnimation};
    animation-duration: 7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;