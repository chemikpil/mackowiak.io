import styled from 'styled-components';

export const Logo = styled.div`
    --width: 48px;

    @media only screen and (min-width: 1024px) {
        --width: 64px;
    }

    width: var(--width);

    & > svg {
        width: var(--width);
    }

    & .logo-primary {
        fill: var(--logo-primary);
    }

    & .logo-secondary {
        fill: var(--logo-secondary);
    }
`;
