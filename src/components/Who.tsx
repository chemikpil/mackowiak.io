import styled from 'theme/styled';
import { CSS_TABLET } from 'utils/breakpoints';

const Who = styled.h2`
    margin: 0;
    font-size: 1.6rem;
    text-align: center;

    ${CSS_TABLET} {
        text-align: left;
    }
`;

export { Who };
