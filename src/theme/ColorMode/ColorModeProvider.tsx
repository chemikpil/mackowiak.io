import React from 'react';
import { ColorMode } from './types';
import { setColor } from './setColors';

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
        ColorMode.light
    );

    const setColorMode = () => {
        const nextColorMode =
            colorMode === ColorMode.light ? ColorMode.dark : ColorMode.light;

        toggleColorModeState(nextColorMode);
        localStorage.setItem('colorMode', nextColorMode);
    };

    React.useEffect(() => {
        setColor(colorMode);
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
