import React from 'react';

import { Header } from './styles';

interface Props {
    children: React.ReactNode
};

export default ({ children }: Props) => <Header>{children}</Header>;
