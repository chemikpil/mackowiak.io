import { ColorMode } from './types';
import { COLORS } from './colors';

const setColor = (mode: ColorMode) => {
    const root = document.documentElement;

    root.style.setProperty('--color-text', COLORS[mode].color.text);
    root.style.setProperty('--color-background', COLORS[mode].color.background);

    root.style.setProperty('--color-mode', mode);
};

export { setColor };
