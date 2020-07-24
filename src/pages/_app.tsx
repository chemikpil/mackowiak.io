import { AppProps } from 'next/app';
import { ModeContextProvider } from 'contexts/ModeContext';
import { CoreThemeProvider } from 'theme/CoreThemeProvider';

const App = ({ Component, pageProps }: AppProps) => (
    <ModeContextProvider>
        <CoreThemeProvider>
            <Component {...pageProps} />
        </CoreThemeProvider>
    </ModeContextProvider>
);

export default App;
