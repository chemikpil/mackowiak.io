import styled from 'theme/styled';
import { Title } from './atoms/Title';
import { Hello } from './atoms/Hello';
import { Who } from './atoms/Who';

type Props = {
    hello: string;
    title: string;
    who: string;
};

const Wrapper = styled.header`
    margin: 0 16px;
`;

const Soon = styled.p`
    font-size: 2.4rem;
    margin: 40px 0 0;
    color: ${({ theme }) => theme.color.text};
`;

const Header = ({ hello, title, who }: Props) => (
    <Wrapper>
        <Hello>{hello}</Hello>
        <Title>{title}</Title>
        <Who>{who}</Who>
        <Soon>Soon ...</Soon>
    </Wrapper>
);

export { Header };
