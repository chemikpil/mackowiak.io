import styled from 'styled-components';
import { SocialList } from '../Social/styles';

export const Footer = styled.footer`
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
        --padding: 0 68px 50px 68px;
    }

    position: absolute;
    bottom: 0;
    left: 50%;

    display: flex;
    justify-content: flex-end;

    margin-left: var(--margin-left);
    width: var(--width);
    padding: var(--padding);
    box-sizing: border-box;

    z-index: 2;

    & > ${SocialList} {
        font-size: 2rem;

        a {
            display: block;
            padding: 5px;
        }

        @media only screen and (min-width: 1024px) {
            flex-direction: column;
            width: 64px;

            text-align: center;
        }
    }
`;
