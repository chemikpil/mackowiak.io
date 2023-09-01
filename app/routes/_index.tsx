import { useTheme } from '~/theme/ThemeProvider';
import { useEffect, useState } from 'react';

export default function Index() {
    const [theme] = useTheme();
    const [localTheme, setLocalTheme] = useState('dark');

    useEffect(() => {
        if (theme) {
            setLocalTheme(theme);
        }
    }, [theme]);

    return (
        <div className="min-h-screen grid grid-rows-home">
            <div className="flex place-content-center">
                <img
                    src={`./images/logo-${localTheme}.svg`}
                    width="48"
                    height="48"
                    alt="Michał chemikpil Maćkowiak"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <header className="flex flex-col mx-4 place-content-center text-neutral-900 dark:text-neutral-100">
                    <p className="text-hello">Hi 👋, I'm</p>
                    <h1 className="text-title whitespace-nowrap">
                        Michał Maćkowiak
                    </h1>
                    <h2 className="text-who">
                        Frontend Engineer / Traveler / Amateur Photographer
                    </h2>
                    <p className="text-2xl mt-10">Soon ...</p>
                </header>
            </div>
            <footer className="flex place-items-center place-content-center text-neutral-900 dark:text-neutral-100">
                <p className="text-xs">
                    © 2023 Michał Maćkowiak. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
