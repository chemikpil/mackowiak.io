const getInitialColorMode = () => {
    const persistedColorPreference = localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
        return persistedColorPreference;
    }

    const systemColorMode = matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference =
        typeof systemColorMode.matches === 'boolean';

    if (hasMediaQueryPreference) {
        return systemColorMode ? 'dark' : 'light';
    }

    return 'light';
};

export { getInitialColorMode };
