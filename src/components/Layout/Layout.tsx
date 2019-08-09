import React from 'react';

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <div>
        {children}
    </div>
);

export default Layout;
