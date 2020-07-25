import styled from 'theme/styled';
import { CSS_TABLET, CSS_DESKTOP } from 'utils/breakpoints';

const Hello = styled.p`
    margin: 0;
    font-size: 2rem;
    text-align: center;

    ${CSS_TABLET} {
        text-align: left;
        font-size: 3rem;
    }

    ${CSS_DESKTOP} {
        font-size: 6rem;
    }
`;

export { Hello };
