import clsx from 'clsx';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react';
import type {
    DataFunctionArgs,
    LinksFunction,
    SerializeFrom,
    V2_MetaFunction,
} from '@remix-run/node';
import { getSeoMeta } from '~/utils/seo';
import { getDomainUrl, getUrl } from '~/utils/misc';
import stylesheet from './tailwind.css';
import {
    NonFlashOfWrongThemeElement,
    ThemeProvider,
    useTheme,
} from '~/theme/ThemeProvider';
import { getThemeSession } from '~/theme/theme.server';

export const meta: V2_MetaFunction = ({ data }) => {
    const url = getUrl(data.requestInfo);

    return [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        ...getSeoMeta({
            title: 'Michal Mackowiak - My place in the internet',
            description:
                'Frontend Engineer / Traveler / Photographer / Cyclist',
            url,
        }),
    ];
};

export const links: LinksFunction = () => [
    {
        rel: 'preload',
        as: 'font',
        href: '/fonts/strawford-regular.woff2',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'preload',
        as: 'font',
        href: '/fonts/strawford-regularitalic.woff2',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'icon',
        href: '/favicon.ico',
    },
    {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicon-16x16.png',
        sizes: '16x16',
    },
    {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicon-32.png',
        sizes: '32x32',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/apple-touch-icon.png',
    },
    { rel: 'stylesheet', href: stylesheet },
];

export type LoaderData = SerializeFrom<typeof loader>;
export async function loader({ request }: DataFunctionArgs) {
    const themeSession = await getThemeSession(request);
    return {
        requestInfo: {
            origin: getDomainUrl(request),
            path: new URL(request.url).pathname,
            session: {
                theme: themeSession.getTheme(),
            },
        },
    };
}

function App() {
    const data = useLoaderData<LoaderData>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={clsx(theme)}>
            <head>
                <meta charSet="utf-8" />
                <title>Michal Mackowiak - My place in the internet</title>
                <Meta />
                <Links />
                <NonFlashOfWrongThemeElement
                    ssrTheme={Boolean(data.requestInfo.session.theme)}
                />
            </head>
            <body className="bg-white dark:bg-slate-800">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export default function AppWithProviders() {
    const data = useLoaderData<LoaderData>();

    return (
        <ThemeProvider specifiedTheme={data.requestInfo.session.theme}>
            <App />
        </ThemeProvider>
    );
}

// TODO: add CatchBoundary and ErrorBoundary
