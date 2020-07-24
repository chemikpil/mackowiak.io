import React from 'react';

type Mode = '' | 'light' | 'dark';

type ModeContextType = {
    mode: Mode;
    toggleMode: VoidFunction;
};

const ModeContext = React.createContext<ModeContextType>({
    mode: null,
    toggleMode: () => null,
});

const ModeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, toggleModeState] = React.useState<Mode>('light');

    const toggleMode = () => {
        localStorage;
        toggleModeState(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <ModeContext.Provider
            value={{
                mode,
                toggleMode,
            }}
        >
            {children}
        </ModeContext.Provider>
    );
};

export { ModeContext, ModeContextProvider };
