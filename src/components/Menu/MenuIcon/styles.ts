import styled, { css } from 'styled-components';

interface ContainerProps {
    isOpen: boolean
};

const ElementStyles = css`
    content: '';
    display: block;

    width: 50%;
    height: 2px;

    background-color: var(--text-primary-color);
    
    backface-visibility: hidden;
    transition: transform .2s ease, opacity .2s ease;
`;

export const Element = styled.span`
    display: flex;
    
    &:before,
    &:after {
        ${ElementStyles}
    }

    &:before {
        transform-origin: 0 50%;
    }

    &:after {
        transform-origin: 100% 50%;
    }
`;

export const CenterElement = styled.span`
    display: flex;
    width: 100%;
    height: 100%;

    position: absolute;
    top: calc(50% - 1px);
    left: 0;

    transition: top .3s ease;
    
    &:before,
    &:after {
        content: '';
        display: block;

        width: 50%;
        height: 0;

        border: 1px solid var(--text-primary-color);

        transition: height .3s ease;
    }

    &:before {
        border-right: 0;
    }

    &:after {
        border-left: 0;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 22px;
    height: 20px;

    cursor: pointer;

    @media only screen and (min-width: 1024px) {
        width: 30px;
        height: 28px;
    }

    & > div {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        transition: transform .5s ease;
    }

    ${(props: ContainerProps) => props.isOpen && css`
        & > div {
            transform: rotate(90deg);
        }

        & > ${CenterElement} {
            top: calc(0% - 1px);

            &:before,
            &:after {
                height: 100%;
            }
        }

        & > div > ${Element} {
           &:first-child {
               &:before {
                   transform: translate(5px, 3px) rotate(45deg);
               }

               &:after {
                   transform: translate(-5px, 3px) rotate(-45deg);
               }
           }

           &:last-child {
               &:before {
                   transform: translate(5px, -3px) rotate(-45deg);
               }

               &:after {
                   transform: translate(-5px, -3px) rotate(45deg);
               }
           }
       }
    `}
`;
