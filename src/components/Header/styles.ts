import styled, { keyframes } from 'styled-components';

const startAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const Header = styled.header`
    --margin-left: -50%;
    --width: 100%;
    --padding: 20px;

    @media only screen and (min-width: 1024px) {
        --margin-left: -512px;
        --width: 1024px;
    }

    @media only screen and (min-width: 1440px) {
        --margin-left: -720px;
        --width: 1440px;
        --padding: 50px 68px 0 68px;
    }

    position: absolute;
    top: 0;
    left: 50%;

    display: flex;
    justify-content: space-between;

    margin-left: var(--margin-left);
    width: var(--width);
    padding: var(--padding);
    box-sizing: border-box;

    opacity: 0;
    animation: ${startAnimation} 0.5s 2s ease forwards;
    z-index: 2;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    width: 64px;
`;
