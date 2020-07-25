import styled from 'theme/styled';
import { CSS_DESKTOP, CSS_TABLET } from '../utils/breakpoints';

const Title = styled.h1`
    margin: 0;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1;
    text-align: center;

    color: ${({ theme }) => theme.color.text};

    ${CSS_TABLET} {
        font-size: 7rem;
        text-indent: -4px;
        text-align: left;
    }

    ${CSS_DESKTOP} {
        font-size: 14rem;
        text-indent: -10px;
    }
`;

export { Title };
