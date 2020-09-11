import { AppProps } from 'next/app';
import { ColorModeContextProvider } from 'theme/ColorMode/ColorModeProvider';
import { CoreThemeProvider } from 'theme/CoreThemeProvider';

const App = ({ Component, pageProps }: AppProps) => (
    <ColorModeContextProvider>
        <CoreThemeProvider>
            <Component {...pageProps} />
        </CoreThemeProvider>
    </ColorModeContextProvider>
);

export default App;
