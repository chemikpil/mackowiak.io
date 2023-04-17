import { createCookieSessionStorage } from '@remix-run/node';
import { getRequiredServerEnvVar } from '~/utils/misc';
import { isTheme } from '~/theme/ThemeProvider';
import type { Theme } from '~/theme/ThemeProvider';

const themeStorage = createCookieSessionStorage({
    cookie: {
        name: 'mackowiak_theme',
        secure: true,
        secrets: [getRequiredServerEnvVar('SESSION_SECRET')],
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
    },
});

async function getThemeSession(request: Request) {
    const session = await themeStorage.getSession(
        request.headers.get('Cookie'),
    );

    return {
        getTheme: () => {
            const themeValue = session.get('theme');
            return isTheme(themeValue) ? themeValue : null;
        },
        setTheme: (theme: Theme) => session.set('theme', theme),
        commit: () => themeStorage.commitSession(session),
    };
}

export { getThemeSession };
