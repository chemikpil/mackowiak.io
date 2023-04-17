import React from 'react';
import { useFetcher } from '@remix-run/react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}
const themes: Array<Theme> = Object.values(Theme);
function isTheme(value: unknown): value is Theme {
    return typeof value === 'string' && themes.includes(value as Theme);
}

const preferredDarkMQ = '(prefers-color-scheme: dark)';
const getPreferredTheme = () => {
    return window.matchMedia(preferredDarkMQ).matches
        ? Theme.DARK
        : Theme.LIGHT;
};

const codeToRunOnClient = `
    ;(() => {
        const theme = window.matchMedia(${JSON.stringify(
            preferredDarkMQ,
        )}).matches
            ? 'dark'
            : 'light'
            
        const cl = document.documentElement.classList;
        const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
        if (!themeAlreadyApplied) {
            cl.add(theme)
        }
        
        const meta = document.querySelector('meta[name=color-scheme]');
        if (meta) {
            if (theme === 'dark') {
                meta.content = 'dark light';
            } else if (theme === 'light') {
                meta.content = 'light dark';
            }
        }
    })()
`;

function NonFlashOfWrongThemeElement({ ssrTheme }: { ssrTheme: boolean }) {
    const [theme] = useTheme();

    return (
        <>
            <meta
                name="color-scheme"
                content={theme === 'dark' ? 'dark light' : 'light dark'}
            />
            {ssrTheme ? null : (
                <script
                    dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
                />
            )}
        </>
    );
}

type ThemeContextType = [Theme | null, VoidFunction];
const ThemeContext = React.createContext<ThemeContextType | undefined>(
    undefined,
);

type ThemeProviderType = {
    children: React.ReactNode;
    specifiedTheme: Theme | null;
};
function ThemeProvider({ children, specifiedTheme }: ThemeProviderType) {
    const [theme, setThemeState] = React.useState<Theme | null>(() => {
        if (specifiedTheme) {
            if (themes.includes(specifiedTheme)) {
                return specifiedTheme;
            }
            return null;
        }

        if (typeof window !== 'object') {
            return null;
        }

        return getPreferredTheme();
    });

    const persistTheme = useFetcher();
    const persistThemeRef = React.useRef(persistTheme);
    const mountRun = React.useRef(false);

    React.useEffect(() => {
        persistThemeRef.current = persistTheme;
    }, [persistTheme]);

    React.useEffect(() => {
        if (!mountRun.current) {
            mountRun.current = true;
            return;
        }
        if (!theme) {
            return;
        }

        persistThemeRef.current.submit(
            { theme },
            { action: 'action/set-theme', method: 'post' },
        );
    }, [theme]);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia(preferredDarkMQ);

        const handleChange = () => {
            setThemeState(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const setTheme = () => {
        setThemeState((prevTheme) =>
            prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
        );
    };

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export { Theme, ThemeProvider, useTheme, isTheme, NonFlashOfWrongThemeElement };
