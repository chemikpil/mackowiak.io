import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';

type Props = {
    children: React.ReactNode;
};

const CoreThemeProvider = ({ children }: Props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { CoreThemeProvider };
