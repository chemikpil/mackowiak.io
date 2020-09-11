import React from 'react';
import { ColorMode } from './types';
import { setColorModeVars } from './setColorModeVars';
import { getInitialColorMode } from './getInitialColorMode';
import { COLORS } from './colors';

type ColorModeContextType = {
    colorMode: ColorMode;
    setColorMode: VoidFunction;
};

const ColorModeContext = React.createContext<ColorModeContextType>({
    colorMode: null,
    setColorMode: () => null,
});

ColorModeContext.displayName = 'ColorModeContext';

const ColorModeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [colorMode, toggleColorModeState] = React.useState<ColorMode>(
        undefined
    );

    const setColorMode = () => {
        const nextColorMode =
            colorMode === ColorMode.light ? ColorMode.dark : ColorMode.light;

        toggleColorModeState(nextColorMode);
        localStorage.setItem('color-mode', nextColorMode);
    };

    React.useEffect(() => {
        const initialColorMode = getInitialColorMode();
        toggleColorModeState(ColorMode[initialColorMode]);
    }, []);

    React.useEffect(() => {
        colorMode && setColorModeVars(colorMode, COLORS);
    }, [colorMode]);

    return (
        <ColorModeContext.Provider
            value={{
                colorMode,
                setColorMode,
            }}
        >
            {children}
        </ColorModeContext.Provider>
    );
};

export { ColorModeContext, ColorModeContextProvider };
