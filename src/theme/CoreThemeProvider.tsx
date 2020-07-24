import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ModeContext } from 'contexts/ModeContext';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

type Props = {
    children: React.ReactNode;
};

const CoreThemeProvider = ({ children }: Props) => {
    const { mode } = React.useContext(ModeContext);
    const theme = mode === 'light' ? lightTheme : darkTheme;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { CoreThemeProvider };
