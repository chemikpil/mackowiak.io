import styled from 'styled-components';

export const Logo = styled.img`
    --width: 48px;

    @media only screen and (min-width: 1024px) {
        --width: 64px;
    }

    width: var(--width);
`;
