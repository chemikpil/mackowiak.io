const setColorModeVars = (mode: string, colors: any) => {
    const root = document.documentElement;

    root.style.setProperty('--color-text', colors[mode].color.text);
    root.style.setProperty('--color-background', colors[mode].color.background);

    root.style.setProperty('--color-mode', mode);
};

export { setColorModeVars };
