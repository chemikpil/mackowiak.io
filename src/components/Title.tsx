import styled from 'theme/styled';
import {
    CSS_DESKTOP_MEDIA_QUERY,
    CSS_TABLET_MEDIA_QUERY,
} from '../utils/breakpoints';

const Title = styled.h1`
    margin: 0;
    font-size: 4rem;
    line-height: 1;

    color: ${({ theme }) => theme.color.text};

    ${CSS_TABLET_MEDIA_QUERY} {
        font-size: 7rem;
    }

    ${CSS_DESKTOP_MEDIA_QUERY} {
        font-size: 14rem;
    }
`;

export { Title };
